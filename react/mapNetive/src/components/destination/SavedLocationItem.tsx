import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/colors';
import { SavedLocation } from '@/types/location';
import Badge from '@/components/ui/Badge';

interface SavedLocationItemProps {
  location: SavedLocation;
  onPress: () => void;
}

export default function SavedLocationItem({
  location,
  onPress,
}: SavedLocationItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconCircle}>
        <Text style={styles.pinIcon}>📍</Text>
      </View>

      <View style={styles.textColumn}>
        <View style={styles.topRow}>
          <Text style={styles.nameText} numberOfLines={1}>
            {location.name}
          </Text>
          {location.tag && (
            <Badge
              text={location.tag}
              color={location.tag === 'Utama' ? 'orange' : 'blue'}
              size="sm"
            />
          )}
        </View>

        <Text style={styles.addressText} numberOfLines={1}>
          {location.address} {location.distance ? `· ${location.distance}` : ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray100,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFEBEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  pinIcon: {
    fontSize: 18,
  },
  textColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColors.gray900,
    flex: 1,
    marginRight: 8,
  },
  addressText: {
    fontSize: 12,
    color: AppColors.gray500,
  },
});

