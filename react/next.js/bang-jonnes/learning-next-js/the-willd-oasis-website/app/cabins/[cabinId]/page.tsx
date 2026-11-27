import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ cabinId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { cabinId } = await params;

  // 1. Ambil datanya terlebih dahulu
  const cabin = await getCabin(cabinId);

  // 2. Cek apakah kabinnya ditemukan di database
  if (!cabin) {
    return {
      title: "Cabin not found",
    };
  }

  // 3. Sekarang TypeScript tahu pasti bahwa cabin BUKAN null
  return {
    title: `Cabin ${cabin.name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return ids;
}

export default async function Page({ params }: PageProps) {
  const { cabinId } = await params;

  const cabin = await getCabin(cabinId);
  // const settings = await gZetSettings();
  // const bookedDates = await getBookedDatesByCabinId(cabinId);

  if (!cabin) notFound(); // import { notFound } from 'next/navigation';

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
