import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";
import { notFound } from "next/navigation";

export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description?: string;
  image: string;
}

export interface CabinPrice {
  regularPrice: number;
  discount: number;
}

export interface Guest {
  id?: number;
  created_at?: string;
  fullName: string;
  email: string;
  nationalID?: string;
  nationality?: string;
  countryFlag?: string;
}

export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  guestId: number | string;
  cabinId: number | string;
  status: string;
  hasBreakfast?: boolean;
  isPaid?: boolean;
  observations?: string;
  cabins: {
    name: string;
    image: string;
  };
}

export interface Settings {
  id: number;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

export interface Country {
  name: string;
  flag: string;
}

/////////////
// GET

export async function getCabin(id: number | string): Promise<Cabin | null> {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getCabinPrice(
  id: number | string,
): Promise<CabinPrice | null> {
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCabins = async function (): Promise<Cabin[]> {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data ?? [];
};

// Guests are uniquely identified by their email address
export async function getGuest(email: string): Promise<Guest | null> {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getBooking(id: number | string): Promise<Booking> {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data as Booking;
}

export async function getBookings(
  guestId: number | string,
): Promise<Booking[]> {
  const { data, error } = await supabase
    .from("bookings")
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)",
    )
    .eq("guestId", guestId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return (data as unknown as Booking[]) ?? [];
}

export async function getBookedDatesByCabinId(
  cabinId: number | string,
): Promise<Date[]> {
  let today: any = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = (data ?? [])
    .map((booking: { startDate: string; endDate: string }) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings(): Promise<Settings> {
  const { data, error } = await supabase.from("settings").select("*").single();

  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data as Settings;
}

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
      { signal: AbortSignal.timeout(8000) },
    );
    if (res.ok) {
      const countries = await res.json();
      if (Array.isArray(countries)) {
        return countries.sort((a, b) => a.name.localeCompare(b.name));
      }
    }

    // Fallback ke endpoint v3.1 jika v2 deprecated atau gagal
    const resV3 = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags",
      { signal: AbortSignal.timeout(8000) },
    );
    if (resV3.ok) {
      const data = await resV3.json();
      if (Array.isArray(data)) {
        return data
          .map((country) => ({
            name: country.name?.common || country.name,
            flag: country.flags?.svg || country.flags?.png || "",
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
      }
    }

    // Fallback ke countriesnow.space jika restcountries.com sedang bermasalah
    const resFallback = await fetch(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      { signal: AbortSignal.timeout(8000) },
    );
    if (resFallback.ok) {
      const json = await resFallback.json();
      if (Array.isArray(json?.data)) {
        return json.data
          .map((country: { name: string; flag: string }) => ({
            name: country.name,
            flag: country.flag || "",
          }))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
      }
    }

    throw new Error(
      `Failed to fetch countries (v2: ${res.status}, v3: ${resV3.status}, fallback: ${resFallback.status})`,
    );
  } catch (err) {
    console.error("getCountries error:", err);
    return [];
  }
}

/////////////
// CREATE

export async function createGuest(newGuest: Partial<Guest>) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function createBooking(newBooking: Partial<Booking>) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(
  id: number | string,
  updatedFields: Partial<Guest>,
) {
  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
  return data;
}

export async function updateBooking(
  id: number | string,
  updatedFields: Partial<Booking>,
) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

/////////////
// DELETE

export async function deleteBooking(id: number | string) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
