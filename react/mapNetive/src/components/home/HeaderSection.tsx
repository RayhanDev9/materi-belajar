import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AppColors } from '@/constants/colors';
import { useAppSelector } from '@/store';

export default function HeaderSection() {
  const router = useRouter();
  const originLabel = useAppSelector((state) => state.location.originLabel);
  const destinationLabel = useAppSelector(
    (state) => state.location.destinationLabel
  );

  const handlePressLocation = () => {
    // Navigate to select destination
    router.push('/(select-destination)/SelectDestination' as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greetingTitle}>Mau ke mana hari ini?</Text>
      <Text style={styles.greetingSubtitle}>
        Pantau rute perjalananmu secara real-time dan akurat
      </Text>

      {/* Tappable Search / Location Card */}
      <TouchableOpacity
        style={styles.locationBox}
        onPress={handlePressLocation}
        activeOpacity={0.85}
      >
        <View style={styles.locationHeader}>
          <Text style={styles.pinIcon}>📍</Text>
          <Text style={styles.locationTitle} numberOfLines={1}>
            {destinationLabel
              ? `${originLabel || 'Lokasi Saya'} → ${destinationLabel}`
              : originLabel || 'Arus Jakarta Pusat & Selatan'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statusRow}>
          <View style={styles.statusBadge}>
            <View style={styles.blueDot} />
            <Text style={styles.statusText}>81% Jalur Utama Lancar</Text>
          </View>
          <View style={styles.liveTag}>
            <Text style={styles.liveTagText}>Live Monitor</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  greetingTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: AppColors.gray900,
    letterSpacing: -0.5,
  },
  greetingSubtitle: {
    fontSize: 13,
    color: AppColors.gray500,
    marginTop: 4,
    marginBottom: 14,
  },
  locationBox: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: AppColors.gray200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pinIcon: {
    fontSize: 18,
  },
  locationTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColors.gray900,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: AppColors.gray100,
    marginVertical: 10,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  blueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: AppColors.primary,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.gray700,
  },
  liveTag: {
    backgroundColor: AppColors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  liveTagText: {
    fontSize: 11,
    fontWeight: '700',
    color: AppColors.primary,
  },
});

