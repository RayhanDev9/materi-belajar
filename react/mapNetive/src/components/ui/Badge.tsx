import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/colors';

interface BadgeProps {
  text: string;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'gray';
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = ({
  text,
  color = 'blue',
  size = 'md',
}) => {
  const getColors = () => {
    switch (color) {
      case 'green':
        return {
          bg: AppColors.successLight,
          text: AppColors.success,
        };
      case 'orange':
        return {
          bg: AppColors.warningLight,
          text: AppColors.warning,
        };
      case 'red':
        return {
          bg: AppColors.dangerLight,
          text: AppColors.danger,
        };
      case 'gray':
        return {
          bg: AppColors.gray100,
          text: AppColors.gray600,
        };
      case 'blue':
      default:
        return {
          bg: AppColors.primaryLight,
          text: AppColors.primary,
        };
    }
  };

  const palette = getColors();
  const isSm = size === 'sm';

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: palette.bg,
          paddingVertical: isSm ? 2 : 4,
          paddingHorizontal: isSm ? 6 : 9,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: palette.text,
            fontSize: isSm ? 11 : 12,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

export default Badge;
