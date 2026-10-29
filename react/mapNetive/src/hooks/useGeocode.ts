import { useQuery } from '@tanstack/react-query';
import { searchLocation } from '@/services/api';
import { LocationResult } from '@/types/location';

export function useGeocode(searchText: string) {
  const query = searchText.trim();

  return useQuery<LocationResult[]>({
    queryKey: ['geocode', query],
    queryFn: () => searchLocation(query),
    enabled: query.length >= 2,
    staleTime: 1000 * 60 * 10, // Cache hasil pencarian 10 menit
  });
}
