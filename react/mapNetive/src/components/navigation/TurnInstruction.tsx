import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleMute } from '@/store/navigationSlice';

const TurnInstruction: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMuted = useAppSelector((state) => state.navigation.isMuted);
  const currentStepIndex = useAppSelector(
    (state) => state.navigation.currentStepIndex
  );
  const selectedRoute = useAppSelector((state) => state.route.selectedRoute);

  const currentStep = selectedRoute?.steps?.[currentStepIndex] || {
    instruction: 'Belok kanan ke Jl. M.H. Thamrin',
    distance: 250,
    duration: 30,
    name: 'Jl. M.H. Thamrin',
  };

  return (
    <View style={styles.container}>
      {/* Top Banner Row */}
      <View style={styles.topRow}>
        <View style={styles.maneuverIconBox}>
          <Text style={styles.arrowIcon}>↱</Text>
        </View>

        <View style={styles.instructionCol}>
          <Text style={styles.distanceRemaining}>
            {currentStep.distance ? `${Math.round(currentStep.distance)} meter lagi` : '250 meter lagi'}
          </Text>
          <Text style={styles.instructionText} numberOfLines={2}>
            {currentStep.instruction}
          </Text>
          <Text style={styles.subInstructionText} numberOfLines={1}>
            Menuju Arteri HR Rasuna Said &gt; Jalur Cepat
          </Text>
        </View>

        <TouchableOpacity
          style={styles.soundButton}
          onPress={() => dispatch(toggleMute())}
          activeOpacity={0.8}
        >
          <Text style={styles.soundIcon}>{isMuted ? '🔇' : '🔊'}</Text>
        </TouchableOpacity>
      </View>

      {/* Lane Guidance Divider */}
      <View style={styles.divider} />

      {/* Lane Indicator Row */}
      <View style={styles.laneRow}>
        <View style={styles.lanes}>
          <Text style={styles.laneLabel}>Jalur:</Text>
          <View style={styles.laneBoxes}>
            <View style={styles.activeLaneBox} />
            <View style={styles.activeLaneBox} />
            <View style={styles.inactiveLaneBox} />
          </View>
        </View>

        <Text style={styles.laneTip}>Gunakan 2 lajur kanan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: AppColors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  maneuverIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  arrowIcon: {
    fontSize: 26,
    color: AppColors.white,
    fontWeight: '900',
  },
  instructionCol: {
    flex: 1,
  },
  distanceRemaining: {
    fontSize: 13,
    fontWeight: '700',
    color: '#D4E5FB',
    marginBottom: 2,
  },
  instructionText: {
    fontSize: 17,
    fontWeight: '800',
    color: AppColors.white,
    letterSpacing: -0.3,
  },
  subInstructionText: {
    fontSize: 11,
    color: '#D4E5FB',
    marginTop: 2,
  },
  soundButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  soundIcon: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginVertical: 10,
  },
  laneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lanes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  laneLabel: {
    color: '#D4E5FB',
    fontSize: 12,
    fontWeight: '600',
  },
  laneBoxes: {
    flexDirection: 'row',
    gap: 4,
  },
  activeLaneBox: {
    width: 14,
    height: 14,
    backgroundColor: AppColors.white,
    borderRadius: 3,
  },
  inactiveLaneBox: {
    width: 14,
    height: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
  },
  laneTip: {
    color: AppColors.white,
    fontSize: 12,
    fontWeight: '700',
  },
});

export default TurnInstruction;
