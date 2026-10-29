import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
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
  const mapRef = useRef<MapView | null>(null);

  const defaultCenter = origin || {
    latitude: -6.175392,
    longitude: 106.827153,
  };

  const polylineCoords =
    selectedRoute?.polyline && selectedRoute.polyline.length > 0
      ? selectedRoute.polyline
      : origin && destination
      ? [origin, destination]
      : [];

  useEffect(() => {
    if (mapRef.current && origin && destination) {
      mapRef.current.fitToCoordinates([origin, destination], {
        edgePadding: { top: 40, right: 40, bottom: 40, left: 40 },
        animated: true,
      });
    }
  }, [origin, destination]);

  const distanceText = selectedRoute
    ? `${(selectedRoute.distance / 1000).toFixed(1)} km`
    : '4.2 km';
  const durationText = selectedRoute
    ? `${Math.round(selectedRoute.duration / 60)} m`
    : '15 m';

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: defaultCenter.latitude,
          longitude: defaultCenter.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        scrollEnabled={true}
        zoomEnabled={true}
      >
        {origin && (
          <Marker
            coordinate={origin}
            title="Lokasi Asal"
            pinColor={AppColors.primary}
          />
        )}
        {destination && (
          <Marker
            coordinate={destination}
            title="Lokasi Tujuan"
            pinColor={AppColors.danger}
          />
        )}
        {polylineCoords.length > 0 && (
          <Polyline
            coordinates={polylineCoords}
            strokeColor={AppColors.primary}
            strokeWidth={4}
          />
        )}
      </MapView>

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
};

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
  },
  map: {
    ...StyleSheet.absoluteFill,
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

