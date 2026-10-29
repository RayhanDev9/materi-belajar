import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store';
import { updateProgress } from '@/store/navigationSlice';
import { useLocation } from '@/hooks/useLocation';

import TurnInstruction from '@/components/navigation/TurnInstruction';
import NavigationMap from '@/components/navigation/NavigationMap';
import StatsBar from '@/components/navigation/StatsBar';
import RouteProgress from '@/components/navigation/RouteProgress';

export default function ActiveNavigationScreen() {
  const dispatch = useAppDispatch();
  const { startWatching, stopWatching } = useLocation();

  const userGpsLocation = useAppSelector(
    (state) => state.location.userGpsLocation
  );
  const destination = useAppSelector((state) => state.location.destination);
  const selectedRoute = useAppSelector((state) => state.route.selectedRoute);
  const { currentSpeed } = useAppSelector(
    (state) => state.navigation
  );

  // Watch GPS and simulate incremental progress for interactive testing
  useEffect(() => {
    startWatching();

    const interval = setInterval(() => {
      dispatch((dispatchAction, getState) => {
        const state = getState();
        const curDistance = state.navigation.distanceTraveled;
        const total = state.navigation.totalDistance || 4200;

        if (curDistance < total) {
          const nextDist = Math.min(curDistance + 80, total);
          const stepsCount = state.route.selectedRoute?.steps.length || 4;
          const nextStepIdx = Math.min(
            Math.floor((nextDist / total) * stepsCount),
            stepsCount - 1
          );

          dispatchAction(
            updateProgress({
              distanceTraveled: nextDist,
              stepIndex: nextStepIdx,
              speed: 40 + Math.floor(Math.random() * 6),
            })
          );
        }
      });
    }, 3500);

    return () => {
      clearInterval(interval);
      stopWatching();
    };
  }, [startWatching, stopWatching, dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Top 1: Turn-by-Turn Instruction Banner */}
        <TurnInstruction />

        {/* Middle 2: Fullscreen/Flexible Map View */}
        <NavigationMap
          userLocation={userGpsLocation}
          destination={destination}
          selectedRoute={selectedRoute}
          currentSpeed={currentSpeed}
        />

        {/* Bottom 3: Stats Bar */}
        <StatsBar />

        {/* Bottom 4: Route Progress & Exit Action */}
        <RouteProgress />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
  },
});
