export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type LocationResult = {
  name: string;           // e.g. "Monas"
  label: string;          // e.g. "Monas, Gambir, Jakarta Pusat"
  coordinate: Coordinate;
};

export type SavedLocation = LocationResult & {
  tag: 'Tersimpan' | 'Utama';
  distance?: string;      // e.g. "5.1 km"
  address: string;        // e.g. "Jl. Jend. Sudirman Kav. 52-53"
};
