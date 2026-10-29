import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coordinate, SavedLocation } from '@/types/location';

export interface LocationState {
  origin: Coordinate | null;
  destination: Coordinate | null;
  originLabel: string;
  destinationLabel: string;
  userGpsLocation: Coordinate | null;
  gpsAccuracy: number | null;
  savedLocations: SavedLocation[];
}

const initialSavedLocations: SavedLocation[] = [
  {
    name: 'Kantor Pusat SCBD',
    address: 'Jl. Jend. Sudirman Kav. 52-53',
    distance: '5.1 km',
    tag: 'Tersimpan',
    label: 'Kantor Pusat SCBD, Jl. Jend. Sudirman Kav. 52-53',
    coordinate: { latitude: -6.225588, longitude: 106.809562 },
  },
  {
    name: 'Grand Indonesia Mall',
    address: 'Jl. M.H. Thamrin No.1',
    distance: '3.8 km',
    tag: 'Tersimpan',
    label: 'Grand Indonesia Mall, Menteng, Jakarta Pusat',
    coordinate: { latitude: -6.195156, longitude: 106.820844 },
  },
  {
    name: 'Stasiun Gambir',
    address: 'Gambir, Kota Jakarta Pusat',
    distance: '1.2 km',
    tag: 'Tersimpan',
    label: 'Stasiun Gambir, Gambir, Kota Jakarta Pusat',
    coordinate: { latitude: -6.17677, longitude: 106.83063 },
  },
  {
    name: 'Rumah (Home)',
    address: 'Kebayoran Baru',
    distance: '8.4 km',
    tag: 'Utama',
    label: 'Rumah, Kebayoran Baru, Jakarta Selatan',
    coordinate: { latitude: -6.241586, longitude: 106.800566 },
  },
];

const initialState: LocationState = {
  // Default origin: Monas, Jakarta Pusat
  origin: { latitude: -6.175392, longitude: 106.827153 },
  // Default destination: Stasiun MRT Bundaran HI
  destination: { latitude: -6.193125, longitude: 106.822986 },
  originLabel: 'Monas / Gambir, Jakarta Pusat',
  destinationLabel: 'Stasiun MRT Bundaran HI',
  userGpsLocation: { latitude: -6.175392, longitude: 106.827153 },
  gpsAccuracy: 3,
  savedLocations: initialSavedLocations,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setOrigin: (
      state,
      action: PayloadAction<{ coordinate: Coordinate; label: string }>
    ) => {
      state.origin = action.payload.coordinate;
      state.originLabel = action.payload.label;
    },
    setDestination: (
      state,
      action: PayloadAction<{ coordinate: Coordinate; label: string }>
    ) => {
      state.destination = action.payload.coordinate;
      state.destinationLabel = action.payload.label;
    },
    clearDestination: (state) => {
      state.destination = null;
      state.destinationLabel = '';
    },
    setUserGpsLocation: (
      state,
      action: PayloadAction<{ coordinate: Coordinate; accuracy?: number }>
    ) => {
      state.userGpsLocation = action.payload.coordinate;
      if (action.payload.accuracy !== undefined) {
        state.gpsAccuracy = action.payload.accuracy;
      }
    },
    addSavedLocation: (state, action: PayloadAction<SavedLocation>) => {
      state.savedLocations.unshift(action.payload);
    },
  },
});

export const {
  setOrigin,
  setDestination,
  clearDestination,
  setUserGpsLocation,
  addSavedLocation,
} = locationSlice.actions;

export default locationSlice.reducer;
