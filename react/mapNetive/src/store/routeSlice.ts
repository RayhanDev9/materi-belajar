import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RouteOption } from '@/types/route';

export interface RouteState {
  allRoutes: RouteOption[];
  selectedRoute: RouteOption | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: RouteState = {
  allRoutes: [],
  selectedRoute: null,
  isLoading: false,
  error: null,
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoutes: (state, action: PayloadAction<RouteOption[]>) => {
      state.allRoutes = action.payload;
      if (action.payload.length > 0) {
        // default select the first one (Tol / Cepat)
        state.selectedRoute = action.payload[0];
      }
    },
    selectRoute: (state, action: PayloadAction<string>) => {
      const found = state.allRoutes.find((r) => r.id === action.payload);
      if (found) {
        state.selectedRoute = found;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearRoutes: (state) => {
      state.allRoutes = [];
      state.selectedRoute = null;
      state.error = null;
    },
  },
});

export const { setRoutes, selectRoute, setLoading, setError, clearRoutes } =
  routeSlice.actions;

export default routeSlice.reducer;
