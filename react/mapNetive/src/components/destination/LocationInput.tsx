import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { AppColors } from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/store';
import { setOrigin, setDestination } from '@/store/locationSlice';
import { useGeocode } from '@/hooks/useGeocode';
import { LocationResult } from '@/types/location';

export default function LocationInput() {
  const dispatch = useAppDispatch();
  const originLabel = useAppSelector((state) => state.location.originLabel);
  const destinationLabel = useAppSelector(
    (state) => state.location.destinationLabel
  );
  const userGpsLocation = useAppSelector(
    (state) => state.location.userGpsLocation
  );

  const [destinationQuery, setDestinationQuery] = useState(destinationLabel);
  const [isSearching, setIsSearching] = useState(false);

  // TanStack Query untuk geocoding
  const { data: searchResults, isLoading } = useGeocode(destinationQuery);

  const handleUseCurrentLocation = () => {
    if (userGpsLocation) {
      dispatch(
        setOrigin({
          coordinate: userGpsLocation,
          label: 'Lokasi Terkini (GPS)',
        })
      );
    }
  };

  const handleSelectPlace = (item: LocationResult) => {
    setDestinationQuery(item.name);
    setIsSearching(false);
    dispatch(
      setDestination({
        coordinate: item.coordinate,
        label: item.name,
      })
    );
  };

  const handleClearDestination = () => {
    setDestinationQuery('');
    setIsSearching(false);
  };

  return (
    <View style={styles.container}>
      {/* 1. Origin Input */}
      <View style={styles.inputGroup}>
        <View style={styles.labelRow}>
          <Text style={styles.inputLabel}>Lokasi Terkini</Text>
          <TouchableOpacity onPress={handleUseCurrentLocation}>
            <Text style={styles.currentLocBtn}>[Gunakan Lokasi Saat Ini]</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputFieldBox}>
          <Text style={styles.dotIconBlue}>🔵</Text>
          <Text style={styles.staticOriginText} numberOfLines={1}>
            {originLabel || 'Menentukan titik awal...'}
          </Text>
        </View>
      </View>

      {/* Connector Line */}
      <View style={styles.connectorLine} />

      {/* 2. Destination Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Lokasi Tujuan</Text>
        <View style={styles.inputFieldBox}>
          <Text style={styles.dotIconRed}>🔴</Text>
          <TextInput
            style={styles.textInput}
            value={destinationQuery}
            placeholder="Cari stasiun, mall, alamat..."
            placeholderTextColor={AppColors.gray400}
            onChangeText={(text) => {
              setDestinationQuery(text);
              setIsSearching(true);
            }}
            onFocus={() => setIsSearching(true)}
          />
          {isLoading && (
            <ActivityIndicator size="small" color={AppColors.primary} />
          )}
          {destinationQuery.length > 0 && !isLoading && (
            <TouchableOpacity onPress={handleClearDestination}>
              <Text style={styles.clearBtnText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* 3. Search Results Dropdown */}
      {isSearching && searchResults && searchResults.length > 0 && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={searchResults}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelectPlace(item)}
              >
                <Text style={styles.dropdownPin}>📍</Text>
                <View style={styles.dropdownTextCol}>
                  <Text style={styles.dropdownItemTitle}>{item.name}</Text>
                  <Text style={styles.dropdownItemSubtitle} numberOfLines={1}>
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: AppColors.gray200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    zIndex: 10,
  },
  inputGroup: {
    marginVertical: 2,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.gray600,
  },
  currentLocBtn: {
    fontSize: 11,
    fontWeight: '700',
    color: AppColors.primary,
  },
  inputFieldBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.gray50,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: AppColors.gray200,
  },
  dotIconBlue: {
    fontSize: 14,
    marginRight: 8,
  },
  dotIconRed: {
    fontSize: 14,
    marginRight: 8,
  },
  staticOriginText: {
    fontSize: 14,
    color: AppColors.gray800,
    fontWeight: '600',
    flex: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: AppColors.gray900,
    fontWeight: '600',
    paddingVertical: 2,
  },
  clearBtnText: {
    fontSize: 14,
    color: AppColors.gray400,
    paddingHorizontal: 4,
  },
  connectorLine: {
    width: 2,
    height: 12,
    backgroundColor: AppColors.gray300,
    marginLeft: 18,
    marginVertical: 1,
  },
  dropdownContainer: {
    marginTop: 8,
    maxHeight: 180,
    backgroundColor: AppColors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: AppColors.gray200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray100,
  },
  dropdownPin: {
    fontSize: 16,
    marginRight: 10,
  },
  dropdownTextCol: {
    flex: 1,
  },
  dropdownItemTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: AppColors.gray900,
  },
  dropdownItemSubtitle: {
    fontSize: 11,
    color: AppColors.gray500,
    marginTop: 1,
  },
});

