import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { AppColors } from '@/constants/colors';
import { Coordinate } from '@/types/location';
import { RouteOption } from '@/types/route';

interface NavigationMapProps {
  userLocation: Coordinate | null;
  destination: Coordinate | null;
  selectedRoute: RouteOption | null;
  currentSpeed?: number;
}

const NavigationMap: React.FC<NavigationMapProps> = ({
  userLocation,
  destination,
  selectedRoute,
  currentSpeed = 42,
}) => {
  const mapRef = useRef<MapView | null>(null);

  const defaultLocation = userLocation || {
    latitude: -6.175392,
    longitude: 106.827153,
  };

  const polylineCoords =
    selectedRoute?.polyline && selectedRoute.polyline.length > 0
      ? selectedRoute.polyline
      : userLocation && destination
      ? [userLocation, destination]
      : [];

  const handleRecenter = () => {
    if (mapRef.current && userLocation) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        },
        500
      );
    }
  };

  useEffect(() => {
    if (mapRef.current && userLocation) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        1000
      );
    }
  }, [userLocation]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: defaultLocation.latitude,
          longitude: defaultLocation.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={true}
      >
        {/* User Location Marker */}
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Posisi Anda"
            pinColor={AppColors.primary}
          />
        )}

        {/* Destination Marker */}
        {destination && (
          <Marker
            coordinate={destination}
            title="Tujuan"
            pinColor={AppColors.danger}
          />
        )}

        {/* POI Marker 1: Taman Suropati */}
        <Marker
          coordinate={{ latitude: -6.1989, longitude: 106.8329 }}
          title="Taman Suropati"
          description="Area Hijau"
        />

        {/* POI Marker 2: Plaza Indonesia */}
        <Marker
          coordinate={{ latitude: -6.1934, longitude: 106.8228 }}
          title="Plaza Indonesia"
          description="Pusat Perbelanjaan"
        />

        {/* Polyline Rute Aktif */}
        {polylineCoords.length > 0 && (
          <Polyline
            coordinates={polylineCoords}
            strokeColor={AppColors.primary}
            strokeWidth={6}
          />
        )}
      </MapView>

      {/* Floating Speedometer Badge */}
      <View style={styles.speedBadge}>
        <Text style={styles.speedNumber}>{currentSpeed}</Text>
        <Text style={styles.speedUnit}>km/h</Text>
      </View>

      {/* Floating Recenter Action */}
      <TouchableOpacity
        style={styles.recenterBtn}
        onPress={handleRecenter}
        activeOpacity={0.8}
      >
        <Text style={styles.recenterIcon}>🎯</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    minHeight: 260,
  },
  map: {
    ...StyleSheet.absoluteFill,
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

export default NavigationMap;
