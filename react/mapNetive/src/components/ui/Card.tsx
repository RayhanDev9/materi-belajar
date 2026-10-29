import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { AppColors } from '@/constants/colors';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  highlighted?: boolean;
  onPress?: () => void;
  activeOpacity?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  highlighted = false,
  onPress,
  activeOpacity = 0.7,
}) => {
  const cardStyle = [
    styles.card,
    highlighted && styles.highlightedCard,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        style={cardStyle}
        onPress={onPress}
        activeOpacity={activeOpacity}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: AppColors.gray100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  highlightedCard: {
    borderColor: AppColors.primary,
    borderWidth: 1.5,
    backgroundColor: '#FFFFFF',
    shadowColor: AppColors.primary,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
});

export default Card;
