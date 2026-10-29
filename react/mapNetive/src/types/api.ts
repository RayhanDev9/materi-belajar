export type OrsGeocodeFeature = {
  properties: {
    name: string;
    label: string;
    country?: string;
    region?: string;
    locality?: string;
    street?: string;
  };
  geometry: {
    coordinates: [number, number]; // [longitude, latitude] in GeoJSON
  };
};

export type OrsGeocodeResponse = {
  features: OrsGeocodeFeature[];
};

export type OrsStep = {
  distance: number;
  duration: number;
  type: number;
  instruction: string;
  name: string;
  way_points: [number, number];
};

export type OrsSegment = {
  distance: number;
  duration: number;
  steps: OrsStep[];
};

export type OrsRouteItem = {
  summary: {
    distance: number;
    duration: number;
  };
  geometry: string; // encoded polyline
  segments: OrsSegment[];
};

export type OrsDirectionsResponse = {
  routes: OrsRouteItem[];
};
