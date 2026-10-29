import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppColors } from '@/constants/colors';
import { RouteOption } from '@/types/route';
import Badge from '@/components/ui/Badge';

interface RouteOptionCardProps {
  option: RouteOption;
  icon: string;
  isSelected?: boolean;
  onSelect: () => void;
}

export default function RouteOptionCard({
  option,
  icon,
  isSelected = false,
  onSelect,
}: RouteOptionCardProps) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        isSelected && styles.selectedCard,
      ]}
      onPress={onSelect}
      activeOpacity={0.8}
    >
      <View style={styles.headerRow}>
        <View style={styles.titleWithIcon}>
          <Text style={styles.emojiIcon}>{icon}</Text>
          <Text style={styles.titleText}>{option.label}</Text>
        </View>

        {isSelected && (
          <View style={styles.checkCircle}>
            <Text style={styles.checkText}>✓</Text>
          </View>
        )}
      </View>

      {/* Badges Row */}
      <View style={styles.badgesRow}>
        {option.badgeText && (
          <Badge
            text={option.badgeText}
            color={option.badgeColor || 'blue'}
            size="sm"
          />
        )}
        {option.subBadgeText && (
          <Badge text={option.subBadgeText} color="gray" size="sm" />
        )}
      </View>

      {/* Description */}
      <Text style={styles.descriptionText} numberOfLines={2}>
        {option.description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: AppColors.gray100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  selectedCard: {
    borderColor: AppColors.primary,
    backgroundColor: '#FAFCFF',
    shadowColor: AppColors.primary,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  emojiIcon: {
    fontSize: 20,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColors.gray900,
    flex: 1,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    color: AppColors.white,
    fontSize: 12,
    fontWeight: '800',
  },
  badgesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 12,
    color: AppColors.gray500,
    lineHeight: 16,
  },
});

