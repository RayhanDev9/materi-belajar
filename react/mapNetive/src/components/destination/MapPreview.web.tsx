import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/colors';
import { Coordinate } from '@/types/location';
import { RouteOption } from '@/types/route';

interface MapPreviewProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  selectedRoute?: RouteOption | null;
}

export default function MapPreview({
  origin,
  destination,
  selectedRoute,
}: MapPreviewProps) {
  const distanceText = selectedRoute
    ? `${(selectedRoute.distance / 1000).toFixed(1)} km`
    : '4.2 km';
  const durationText = selectedRoute
    ? `${Math.round(selectedRoute.duration / 60)} m`
    : '15 m';

  return (
    <View style={styles.container}>
      {/* Visual Web Map Background */}
      <View style={styles.mapCanvas}>
        {/* Grid Lines Pattern */}
        <View style={styles.gridLineHorizontal1} />
        <View style={styles.gridLineHorizontal2} />
        <View style={styles.gridLineVertical1} />
        <View style={styles.gridLineVertical2} />

        {/* Route Line Visualization */}
        <View style={styles.routeCurve} />

        {/* Origin Pin */}
        <View style={styles.originMarker}>
          <Text style={styles.markerEmoji}>🔵</Text>
          <View style={styles.pinLabel}>
            <Text style={styles.pinLabelText}>Asal</Text>
          </View>
        </View>

        {/* Destination Pin */}
        <View style={styles.destinationMarker}>
          <Text style={styles.markerEmoji}>🔴</Text>
          <View style={styles.pinLabel}>
            <Text style={styles.pinLabelText}>Tujuan</Text>
          </View>
        </View>

        {/* Web Platform Notice */}
        <View style={styles.platformNotice}>
          <Text style={styles.noticeText}>
            🌐 Web Preview · {origin?.latitude.toFixed(3)}, {origin?.longitude.toFixed(3)}
          </Text>
        </View>
      </View>

      {/* Floating Info Overlay */}
      <View style={styles.floatingStats}>
        <View style={styles.statPill}>
          <Text style={styles.statIcon}>📍</Text>
          <Text style={styles.statText}>{distanceText}</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={styles.statIcon}>⏱</Text>
          <Text style={styles.statText}>{durationText}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: AppColors.gray200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
    backgroundColor: '#E5EDF7',
  },
  mapCanvas: {
    ...StyleSheet.absoluteFill,
    position: 'relative',
    backgroundColor: '#E8F1FD',
    overflow: 'hidden',
  },
  gridLineHorizontal1: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#D1E2F8',
  },
  gridLineHorizontal2: {
    position: 'absolute',
    top: '70%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#D1E2F8',
  },
  gridLineVertical1: {
    position: 'absolute',
    left: '35%',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#D1E2F8',
  },
  gridLineVertical2: {
    position: 'absolute',
    left: '70%',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#D1E2F8',
  },
  routeCurve: {
    position: 'absolute',
    left: '25%',
    top: '40%',
    width: '50%',
    height: 4,
    backgroundColor: AppColors.primary,
    borderRadius: 2,
    transform: [{ rotate: '15deg' }],
  },
  originMarker: {
    position: 'absolute',
    left: '20%',
    top: '45%',
    alignItems: 'center',
  },
  destinationMarker: {
    position: 'absolute',
    right: '25%',
    top: '30%',
    alignItems: 'center',
  },
  markerEmoji: {
    fontSize: 18,
  },
  pinLabel: {
    backgroundColor: AppColors.white,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 2,
    borderWidth: 1,
    borderColor: AppColors.gray200,
  },
  pinLabelText: {
    fontSize: 10,
    fontWeight: '700',
    color: AppColors.gray800,
  },
  platformNotice: {
    position: 'absolute',
    top: 8,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  noticeText: {
    fontSize: 10,
    color: AppColors.gray600,
    fontWeight: '600',
  },
  floatingStats: {
    position: 'absolute',
    bottom: 10,
    right: 12,
    flexDirection: 'row',
    gap: 8,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 46, 0.85)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },
  statIcon: {
    fontSize: 12,
  },
  statText: {
    color: AppColors.white,
    fontSize: 12,
    fontWeight: '700',
  },
});
