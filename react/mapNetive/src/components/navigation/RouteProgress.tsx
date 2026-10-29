import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AppColors } from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/store';
import { endNavigation } from '@/store/navigationSlice';

const RouteProgress: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    distanceTraveled,
    totalDistance,
    remainingDistance,
    estimatedArrival,
  } = useAppSelector((state) => state.navigation);

  const safeTotal = totalDistance || 4200;
  const progressPercent = Math.min(
    100,
    Math.round((distanceTraveled / safeTotal) * 100)
  );

  const traveledKm = (distanceTraveled / 1000).toFixed(1);
  const remainingKm = (remainingDistance / 1000).toFixed(1);

  const handleEndRoute = () => {
    dispatch(endNavigation());
    router.replace('/' as any);
  };

  return (
    <View style={styles.container}>
      {/* 1. Header Catatan Waktu */}
      <View style={styles.headerRow}>
        <Text style={styles.titleLabel}>Catatan Waktu Perjalanan</Text>
        <Text style={styles.arrivalClock}>
          Tiba {estimatedArrival} WIB
        </Text>
      </View>

      {/* 2. Dua Kolom Ringkasan */}
      <View style={styles.twoColBox}>
        <View style={styles.infoCol}>
          <Text style={styles.infoSub}>Sisa Jarak</Text>
          <Text style={styles.infoMain}>{remainingKm} km</Text>
          <Text style={styles.infoHint}>Rec: 34 km/h</Text>
        </View>

        <View style={styles.verticalDivider} />

        <View style={styles.infoCol}>
          <Text style={styles.infoSub}>Status Rute</Text>
          <View style={styles.statusRow}>
            <View style={styles.greenDot} />
            <Text style={styles.statusTitle}>Lancar</Text>
          </View>
          <Text style={styles.infoHint}>Live GPS</Text>
        </View>
      </View>

      {/* 3. Progress Bar Rute */}
      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>
            Progress Rute ({progressPercent}%)
          </Text>
          <Text style={styles.progressKm}>{traveledKm} km ditempuh</Text>
        </View>

        <View style={styles.progressBarTrack}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${Math.max(5, progressPercent)}%` },
            ]}
          />
        </View>
      </View>

      {/* 4. Action Row */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.endRouteButton}
          onPress={handleEndRoute}
          activeOpacity={0.8}
        >
          <Text style={styles.endRouteText}>✕ Akhiri Rute</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alertButton} activeOpacity={0.8}>
          <Text style={styles.alertIcon}>⚠️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.gray500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  arrivalClock: {
    fontSize: 13,
    fontWeight: '800',
    color: AppColors.primary,
  },
  twoColBox: {
    flexDirection: 'row',
    backgroundColor: AppColors.gray50,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: AppColors.gray100,
    marginBottom: 10,
  },
  infoCol: {
    flex: 1,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: AppColors.gray200,
    marginHorizontal: 12,
  },
  infoSub: {
    fontSize: 11,
    color: AppColors.gray500,
    fontWeight: '600',
  },
  infoMain: {
    fontSize: 16,
    fontWeight: '800',
    color: AppColors.gray900,
    marginTop: 1,
  },
  infoHint: {
    fontSize: 11,
    color: AppColors.gray400,
    marginTop: 2,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 1,
  },
  greenDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: AppColors.success,
  },
  statusTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: AppColors.success,
  },
  progressSection: {
    marginBottom: 12,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.gray700,
  },
  progressKm: {
    fontSize: 12,
    color: AppColors.gray500,
    fontWeight: '600',
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: AppColors.gray100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: AppColors.primary,
    borderRadius: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  endRouteButton: {
    flex: 1,
    backgroundColor: '#FFEBEA',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFD3D1',
  },
  endRouteText: {
    color: AppColors.danger,
    fontSize: 15,
    fontWeight: '800',
  },
  alertButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: AppColors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertIcon: {
    fontSize: 20,
  },
});

export default RouteProgress;
