import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllRoutes } from '@/services/api';
import { Coordinate } from '@/types/location';
import { RouteOption } from '@/types/route';
import { useAppDispatch } from '@/store';
import { setRoutes, setLoading, setError } from '@/store/routeSlice';

export function useRoute(origin: Coordinate | null, destination: Coordinate | null) {
  const dispatch = useAppDispatch();

  const query = useQuery<RouteOption[]>({
    queryKey: [
      'routes',
      origin?.latitude,
      origin?.longitude,
      destination?.latitude,
      destination?.longitude,
    ],
    queryFn: () => {
      if (!origin || !destination) return Promise.resolve([]);
      return getAllRoutes(origin, destination);
    },
    enabled: Boolean(origin && destination),
    staleTime: 1000 * 60 * 5, // Cache rute 5 menit
  });

  useEffect(() => {
    dispatch(setLoading(query.isLoading));
    if (query.data && query.data.length > 0) {
      dispatch(setRoutes(query.data));
    }
    if (query.error) {
      dispatch(setError((query.error as Error).message));
    }
  }, [query.data, query.isLoading, query.error, dispatch]);

  return query;
}
