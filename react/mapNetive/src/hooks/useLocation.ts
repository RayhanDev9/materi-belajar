import { useEffect, useState, useRef, useCallback } from 'react';
import * as Location from 'expo-location';
import { Coordinate } from '@/types/location';
import { useAppDispatch } from '@/store';
import { setUserGpsLocation } from '@/store/locationSlice';

export function useLocation() {
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState<Coordinate | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const watchSubscription = useRef<Location.LocationSubscription | null>(null);

  // Track lokasi berkala (untuk mode Active Navigation)
  const startWatching = useCallback(async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      if (watchSubscription.current) {
        watchSubscription.current.remove();
      }

      watchSubscription.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 5, // Update setiap gerak 5 meter
          timeInterval: 3000,   // atau setiap 3 detik
        },
        (loc) => {
          const coord: Coordinate = {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
          };
          const acc = loc.coords.accuracy ? Math.round(loc.coords.accuracy) : 3;
          setLocation(coord);
          setAccuracy(acc);
          dispatch(setUserGpsLocation({ coordinate: coord, accuracy: acc }));
        }
      );
    } catch (err) {
      console.warn('Gagal watch lokasi:', err);
    }
  }, [dispatch]);

  const stopWatching = useCallback(() => {
    if (watchSubscription.current) {
      watchSubscription.current.remove();
      watchSubscription.current = null;
    }
  }, []);

  const refreshLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Izin akses lokasi tidak diberikan.');
        return;
      }

      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const currentCoord: Coordinate = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      setLocation(currentCoord);
      const acc = position.coords.accuracy ? Math.round(position.coords.accuracy) : 3;
      setAccuracy(acc);
      dispatch(setUserGpsLocation({ coordinate: currentCoord, accuracy: acc }));
    } catch (err) {
      console.warn('Gagal refresh lokasi GPS:', err);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;

    async function initGps() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (!isMounted) return;

        if (status !== 'granted') {
          setError('Izin akses lokasi tidak diberikan.');
          const defaultCoord: Coordinate = {
            latitude: -6.175392,
            longitude: 106.827153,
          };
          setLocation(defaultCoord);
          setAccuracy(5);
          dispatch(setUserGpsLocation({ coordinate: defaultCoord, accuracy: 5 }));
          return;
        }

        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        if (!isMounted) return;

        const currentCoord: Coordinate = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setLocation(currentCoord);
        const acc = position.coords.accuracy ? Math.round(position.coords.accuracy) : 3;
        setAccuracy(acc);
        dispatch(setUserGpsLocation({ coordinate: currentCoord, accuracy: acc }));
      } catch (err) {
        if (!isMounted) return;
        console.warn('Gagal inisialisasi GPS:', err);
        const defaultCoord: Coordinate = {
          latitude: -6.175392,
          longitude: 106.827153,
        };
        setLocation(defaultCoord);
        setAccuracy(3);
        dispatch(setUserGpsLocation({ coordinate: defaultCoord, accuracy: 3 }));
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    initGps();

    return () => {
      isMounted = false;
      stopWatching();
    };
  }, [dispatch, stopWatching]);

  return {
    location,
    accuracy,
    isLoading,
    error,
    refreshLocation,
    startWatching,
    stopWatching,
  };
}

export default useLocation;
