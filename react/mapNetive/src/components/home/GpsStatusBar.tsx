import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/colors';
import { useAppSelector } from '@/store';

export default function GpsStatusBar() {
  const accuracy = useAppSelector((state) => state.location.gpsAccuracy) ?? 3;

  const isGood = accuracy <= 15;
  const statusColor = isGood ? AppColors.success : AppColors.warning;
  const statusBg = isGood ? AppColors.successLight : AppColors.warningLight;
  const statusText = isGood ? 'GPS Aktif · Akurat' : 'GPS Lemah · Mencari Sinyal';

  return (
    <View style={[styles.container, { backgroundColor: statusBg }]}>
      <View style={styles.leftRow}>
        <View style={[styles.dot, { backgroundColor: statusColor }]} />
        <Text style={[styles.label, { color: statusColor }]}>{statusText}</Text>
      </View>
      <View style={styles.rightRow}>
        <Text style={styles.icon}>📡</Text>
        <Text style={styles.accuracyText}>Akurasi: {accuracy}m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 24,
    marginVertical: 4,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    fontSize: 12,
  },
  accuracyText: {
    fontSize: 12,
    color: AppColors.gray600,
    fontWeight: '500',
  },
});

