import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ cabinId: string }> },
) {
  const { cabinId } = await params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({
      cabin,
      bookedDates,
    });
  } catch (error) {
    return Response.json(
      {
        message: error instanceof Error ? error.message : "Cabin not found",
      },
      { status: 404 },
    );
  }
}
