import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/colors';
import { useAppSelector } from '@/store';

const StatsBar: React.FC = () => {
  const {
    remainingDistance,
    estimatedArrival,
    currentSpeed,
    statusTraffic,
  } = useAppSelector((state) => state.navigation);

  const selectedRoute = useAppSelector((state) => state.route.selectedRoute);

  const remainingKm = (remainingDistance / 1000).toFixed(1);
  const remainingMinutes = selectedRoute
    ? Math.max(1, Math.round((remainingDistance / (selectedRoute.distance || 4200)) * (selectedRoute.duration / 60)))
    : 15;

  return (
    <View style={styles.container}>
      {/* Kolom 1: ETA */}
      <View style={styles.col}>
        <Text style={styles.statNumber}>{remainingMinutes}</Text>
        <Text style={styles.statLabel}>Menit</Text>
        <Text style={styles.statSub}>({estimatedArrival})</Text>
      </View>

      <View style={styles.colDivider} />

      {/* Kolom 2: Jarak */}
      <View style={styles.col}>
        <Text style={styles.statNumber}>{remainingKm}</Text>
        <Text style={styles.statLabel}>Kilometer</Text>
        <Text style={styles.statSub}>Sisa Rute</Text>
      </View>

      <View style={styles.colDivider} />

      {/* Kolom 3: Status */}
      <View style={styles.col}>
        <View style={styles.statusRow}>
          <View style={styles.greenDot} />
          <Text style={styles.statusText}>{statusTraffic}</Text>
        </View>
        <Text style={styles.statLabel}>Live GPS</Text>
        <Text style={styles.statSub}>= {currentSpeed} km/h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: AppColors.gray200,
    justifyContent: 'space-around',
  },
  col: {
    alignItems: 'center',
    flex: 1,
  },
  colDivider: {
    width: 1,
    height: 38,
    backgroundColor: AppColors.gray200,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '900',
    color: AppColors.gray900,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.gray600,
    marginTop: -2,
  },
  statSub: {
    fontSize: 11,
    color: AppColors.gray400,
    marginTop: 2,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: AppColors.success,
  },
  statusText: {
    fontSize: 15,
    fontWeight: '800',
    color: AppColors.success,
  },
});

export default StatsBar;
