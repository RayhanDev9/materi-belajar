import React from "react";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { Cabin } from "@/app/_components/CabinCard";
import { unstable_noStore } from "next/cache";

export default async function CabinList({ filter }: { filter: string }) {
  unstable_noStore();
  // CHANGE
  const cabins: Cabin[] = await getCabins();

  if (!cabins.length) return null;

  let displayCabins;

  if (filter === "all") displayCabins = cabins;
  if (filter === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  if (filter === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 5,
    );
  if (filter === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 5);

  
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins?.map(
        (cabin): React.ReactNode => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ),
      )}
    </div>
  );
}
