import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { AppColors } from '@/constants/colors';

interface IconButtonProps {
  icon: React.ReactNode | string;
  onPress?: () => void;
  size?: number;
  variant?: 'primary' | 'danger' | 'secondary' | 'ghost';
  style?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 40,
  variant = 'secondary',
  style,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: AppColors.primary,
        };
      case 'danger':
        return {
          backgroundColor: AppColors.dangerLight,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
        };
      case 'secondary':
      default:
        return {
          backgroundColor: AppColors.gray100,
        };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        getVariantStyles(),
        style,
      ]}
    >
      {typeof icon === 'string' ? (
        <Text style={styles.iconText}>{icon}</Text>
      ) : (
        icon
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
});

export default IconButton;
