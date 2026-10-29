import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavigationState {
  isNavigating: boolean;
  currentStepIndex: number;
  distanceTraveled: number;
  remainingDistance: number;
  totalDistance: number;
  estimatedArrival: string;
  currentSpeed: number; // km/h
  statusTraffic: 'Lancar' | 'Padat' | 'Macet';
  isMuted: boolean;
}

const initialState: NavigationState = {
  isNavigating: false,
  currentStepIndex: 0,
  distanceTraveled: 0,
  remainingDistance: 4200,
  totalDistance: 4200,
  estimatedArrival: '17:42',
  currentSpeed: 42,
  statusTraffic: 'Lancar',
  isMuted: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    startNavigation: (
      state,
      action: PayloadAction<{ totalDistance: number; durationSeconds: number }>
    ) => {
      state.isNavigating = true;
      state.currentStepIndex = 0;
      state.distanceTraveled = 0;
      state.totalDistance = action.payload.totalDistance;
      state.remainingDistance = action.payload.totalDistance;

      // Hitung jam tiba
      const arrivalDate = new Date(Date.now() + action.payload.durationSeconds * 1000);
      const hours = String(arrivalDate.getHours()).padStart(2, '0');
      const minutes = String(arrivalDate.getMinutes()).padStart(2, '0');
      state.estimatedArrival = `${hours}:${minutes}`;
      state.currentSpeed = 42;
      state.statusTraffic = 'Lancar';
    },
    updateProgress: (
      state,
      action: PayloadAction<{
        stepIndex?: number;
        distanceTraveled?: number;
        speed?: number;
      }>
    ) => {
      if (action.payload.stepIndex !== undefined) {
        state.currentStepIndex = action.payload.stepIndex;
      }
      if (action.payload.distanceTraveled !== undefined) {
        state.distanceTraveled = action.payload.distanceTraveled;
        state.remainingDistance = Math.max(
          0,
          state.totalDistance - action.payload.distanceTraveled
        );
      }
      if (action.payload.speed !== undefined) {
        state.currentSpeed = action.payload.speed;
      }
    },
    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    endNavigation: (state) => {
      state.isNavigating = false;
      state.currentStepIndex = 0;
      state.distanceTraveled = 0;
    },
  },
});

export const { startNavigation, updateProgress, toggleMute, endNavigation } =
  navigationSlice.actions;

export default navigationSlice.reducer;
