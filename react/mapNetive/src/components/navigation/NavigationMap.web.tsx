import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/colors';
import { Coordinate } from '@/types/location';
import { RouteOption } from '@/types/route';

interface NavigationMapProps {
  userLocation: Coordinate | null;
  destination: Coordinate | null;
  selectedRoute: RouteOption | null;
  currentSpeed?: number;
}

export default function NavigationMap({
  userLocation,
  destination,
  currentSpeed = 42,
}: NavigationMapProps) {
  return (
    <View style={styles.container}>
      {/* Visual Web Map Canvas */}
      <View style={styles.canvasBackground}>
        {/* City Grid Background */}
        <View style={styles.cityBlock1} />
        <View style={styles.cityBlock2} />
        <View style={styles.cityBlock3} />
        <View style={styles.mainRoad} />
        <View style={styles.activeRouteGlow} />

        {/* User GPS Pin */}
        <View style={styles.userLocationPin}>
          <View style={styles.pulseRing} />
          <View style={styles.userDot} />
          <Text style={styles.userLabel}>Anda (GPS)</Text>
        </View>

        {/* Destination Pin */}
        <View style={styles.destinationPin}>
          <Text style={styles.destEmoji}>📍</Text>
          <Text style={styles.destLabel}>Tujuan</Text>
        </View>

        {/* POIs */}
        <View style={styles.poi1}>
          <Text style={styles.poiText}>🌳 Taman Suropati</Text>
        </View>
        <View style={styles.poi2}>
          <Text style={styles.poiText}>🏢 Plaza Indonesia</Text>
        </View>

        {/* Web Badge */}
        <View style={styles.webTag}>
          <Text style={styles.webTagText}>
            🌐 Web View · GPS Simulasi Aktif ({userLocation?.latitude.toFixed(3)}, {destination?.latitude.toFixed(3)})
          </Text>
        </View>
      </View>

      {/* Speedometer */}
      <View style={styles.speedBadge}>
        <Text style={styles.speedNumber}>{currentSpeed}</Text>
        <Text style={styles.speedUnit}>km/h</Text>
      </View>

      {/* Recenter Button */}
      <TouchableOpacity style={styles.recenterBtn} activeOpacity={0.8}>
        <Text style={styles.recenterIcon}>🎯</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    minHeight: 260,
    backgroundColor: '#E8F1FD',
    overflow: 'hidden',
  },
  canvasBackground: {
    ...StyleSheet.absoluteFill,
    position: 'relative',
  },
  cityBlock1: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 100,
    height: 70,
    backgroundColor: '#D7E7FA',
    borderRadius: 8,
  },
  cityBlock2: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    width: 120,
    height: 80,
    backgroundColor: '#D7E7FA',
    borderRadius: 8,
  },
  cityBlock3: {
    position: 'absolute',
    top: 40,
    right: 40,
    width: 90,
    height: 90,
    backgroundColor: '#D7E7FA',
    borderRadius: 8,
  },
  mainRoad: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 36,
    backgroundColor: '#C5DCF8',
    transform: [{ rotate: '-8deg' }],
  },
  activeRouteGlow: {
    position: 'absolute',
    top: '50%',
    left: '15%',
    width: '70%',
    height: 8,
    backgroundColor: AppColors.primary,
    borderRadius: 4,
    transform: [{ rotate: '-8deg' }],
    shadowColor: AppColors.primary,
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  userLocationPin: {
    position: 'absolute',
    left: '25%',
    top: '46%',
    alignItems: 'center',
  },
  pulseRing: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(52, 120, 246, 0.25)',
  },
  userDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: AppColors.primary,
    borderWidth: 2,
    borderColor: AppColors.white,
    marginTop: 9,
  },
  userLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: AppColors.primary,
    marginTop: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  destinationPin: {
    position: 'absolute',
    right: '25%',
    top: '38%',
    alignItems: 'center',
  },
  destEmoji: {
    fontSize: 22,
  },
  destLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: AppColors.danger,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  poi1: {
    position: 'absolute',
    left: '12%',
    top: '20%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  poi2: {
    position: 'absolute',
    right: '15%',
    bottom: '25%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  poiText: {
    fontSize: 11,
    color: AppColors.gray700,
    fontWeight: '600',
  },
  webTag: {
    position: 'absolute',
    top: 10,
    right: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  webTagText: {
    fontSize: 10,
    color: AppColors.gray600,
    fontWeight: '600',
  },
  speedBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: AppColors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: AppColors.gray200,
  },
  speedNumber: {
    fontSize: 20,
    fontWeight: '900',
    color: AppColors.gray900,
  },
  speedUnit: {
    fontSize: 10,
    fontWeight: '700',
    color: AppColors.gray500,
    textTransform: 'uppercase',
  },
  recenterBtn: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: AppColors.gray200,
  },
  recenterIcon: {
    fontSize: 20,
  },
});
