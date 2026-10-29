import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AppColors } from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/store';
import { setDestination } from '@/store/locationSlice';
import { startNavigation } from '@/store/navigationSlice';
import { SavedLocation } from '@/types/location';

import LocationInput from '@/components/destination/LocationInput';
import MapPreview from '@/components/destination/MapPreview';
import SavedLocationItem from '@/components/destination/SavedLocationItem';

export default function SelectDestinationScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const origin = useAppSelector((state) => state.location.origin);
  const destination = useAppSelector((state) => state.location.destination);
  const savedLocations = useAppSelector(
    (state) => state.location.savedLocations
  );
  const selectedRoute = useAppSelector((state) => state.route.selectedRoute);

  const handleSelectSavedLocation = (item: SavedLocation) => {
    dispatch(
      setDestination({
        coordinate: item.coordinate,
        label: item.name,
      })
    );
  };

  const handleStartTrip = () => {
    const totalDist = selectedRoute?.distance ?? 4200;
    const durationSec = selectedRoute?.duration ?? 900;

    dispatch(
      startNavigation({
        totalDistance: totalDist,
        durationSeconds: durationSec,
      })
    );

    router.push('/(navigation)/ActiveNavigation' as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Navbar */}
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Tentukan Rute</Text>
          <View style={{ width: 36 }} />
        </View>

        {/* Input Lokasi Asal & Tujuan */}
        <LocationInput />

        {/* Peta Preview */}
        <MapPreview
          origin={origin}
          destination={destination}
          selectedRoute={selectedRoute}
        />

        {/* Section Header */}
        <Text style={styles.sectionHeader}>
          LOKASI TERSIMPAN / TERAKHIR DICARI
        </Text>

        {/* Daftar Lokasi Tersimpan */}
        <FlatList
          data={savedLocations}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => (
            <SavedLocationItem
              location={item}
              onPress={() => handleSelectSavedLocation(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        />

        {/* Tombol Mulai Perjalanan */}
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={handleStartTrip}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryBtnText}>Mulai Perjalanan</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: AppColors.gray200,
  },
  backBtnText: {
    fontSize: 18,
    color: AppColors.gray800,
    fontWeight: '700',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: AppColors.gray900,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.gray500,
    letterSpacing: 0.5,
    marginTop: 8,
    marginBottom: 4,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: AppColors.white,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: AppColors.gray100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 8,
  },
  primaryBtn: {
    backgroundColor: AppColors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtnText: {
    color: AppColors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});