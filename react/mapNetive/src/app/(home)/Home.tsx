import React, { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AppColors } from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectRoute } from '@/store/routeSlice';
import { startNavigation } from '@/store/navigationSlice';
import { useLocation } from '@/hooks/useLocation';
import { useRoute } from '@/hooks/useRoute';
import { getOfflineFallbackRoutes } from '@/services/api';

import GpsStatusBar from '@/components/home/GpsStatusBar';
import HeaderSection from '@/components/home/HeaderSection';
import RouteOptionCard from '@/components/home/RouteOptionCard';

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // Initialize GPS location tracking
  useLocation();

  const origin = useAppSelector((state) => state.location.origin);
  const destination = useAppSelector((state) => state.location.destination);
  const selectedRoute = useAppSelector((state) => state.route.selectedRoute);

  // Fetch real routes from OpenRouteService
  const { data: routesFromApi, isLoading } = useRoute(origin, destination);

  // Fallback default routes agar tampilan selalu lengkap 5 kartu
  const fallbackRoutes = useMemo(() => {
    return getOfflineFallbackRoutes(
      origin || { latitude: -6.175392, longitude: 106.827153 },
      destination || { latitude: -6.193125, longitude: 106.822986 }
    );
  }, [origin, destination]);

  const activeRoutes = routesFromApi && routesFromApi.length > 0 ? routesFromApi : fallbackRoutes;
  const currentSelectedId = selectedRoute?.id || activeRoutes[0]?.id;

  const getEmojiIcon = (id: string, index: number) => {
    if (id.includes('car') || id.includes('tol')) return '🚗';
    if (id.includes('transit') || id.includes('brt')) return '🚌';
    if (id.includes('motorcycle') || id.includes('alt')) return '🏍️';
    if (id.includes('bike') || id.includes('pedestrian')) return '🚶';
    if (id.includes('smart') || id.includes('estimated')) return '📊';
    const emojis = ['🚗', '🚌', '🏍️', '🚶', '📊'];
    return emojis[index % emojis.length];
  };

  const handleSelectRoute = (id: string) => {
    dispatch(selectRoute(id));
  };

  const handleStartNavigating = () => {
    const routeToUse =
      activeRoutes.find((r) => r.id === currentSelectedId) || activeRoutes[0];

    dispatch(
      startNavigation({
        totalDistance: routeToUse.distance,
        durationSeconds: routeToUse.duration,
      })
    );

    // Navigasi ke Active Navigation
    router.push('/(navigation)/ActiveNavigation' as any);
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Navbar */}
        <View style={styles.topNavbar}>
          <View>
            <Text style={styles.brandTitle}>Route Tracker</Text>
            <Text style={styles.brandSubtitle}>Map Explorer</Text>
          </View>

          <View style={styles.userBadge}>
            <Text style={styles.userAvatar}>🧭</Text>
          </View>
        </View>

        {/* GPS Status Bar */}
        <GpsStatusBar />

        {/* Header Section (Greeting + Search Card) */}
        <HeaderSection />

        {/* Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pilihan Jalur Perjalanan</Text>
          {isLoading && (
            <ActivityIndicator size="small" color={AppColors.primary} />
          )}
        </View>

        {/* List 5 Route Options */}
        {activeRoutes.map((option, index) => (
          <RouteOptionCard
            key={option.id}
            option={option}
            icon={getEmojiIcon(option.id, index)}
            isSelected={option.id === currentSelectedId}
            onSelect={() => handleSelectRoute(option.id)}
          />
        ))}

        {/* Footer Info */}
        <View style={styles.footerInfoBox}>
          <Text style={styles.footerInfoText}>
            ⚡ Didukung data sensor real-time & OpenRouteService
          </Text>
        </View>
      </ScrollView>

      {/* Fixed Bottom Action Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleStartNavigating}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Pilih Jalur</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 90,
  },
  topNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 4,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: AppColors.gray900,
    letterSpacing: -0.5,
  },
  brandSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.primary,
    marginTop: -2,
  },
  userBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: AppColors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4E5FB',
  },
  userAvatar: {
    fontSize: 18,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.gray800,
  },
  footerInfoBox: {
    alignItems: 'center',
    marginVertical: 12,
  },
  footerInfoText: {
    fontSize: 11,
    color: AppColors.gray400,
    fontWeight: '500',
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
  primaryButton: {
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
  primaryButtonText: {
    color: AppColors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
