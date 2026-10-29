import { Coordinate } from './location';

export type RouteProfile = 'driving-car' | 'cycling-regular' | 'foot-walking';

export type RouteStep = {
  instruction: string;    // e.g. "Belok kanan ke Jl. Thamrin"
  distance: number;       // in meters
  duration: number;       // in seconds
  type: number;           // maneuver type id
  name?: string;          // street name
};

export type RouteOption = {
  id: string;
  profile: RouteProfile;
  label: string;          // e.g. "Jalur Tol & Arteri Cepat"
  distance: number;       // total meters
  duration: number;       // total seconds
  polyline: Coordinate[]; // array of coordinates for MapView Polyline
  steps: RouteStep[];     // turn-by-turn steps
  description: string;    // e.g. "Lalu lintas relatif lancar"
  badgeText?: string;     // e.g. "Paling Cepat · 24m"
  badgeColor?: 'blue' | 'green' | 'orange' | 'red';
  subBadgeText?: string;  // e.g. "Bebas Hambatan"
};
