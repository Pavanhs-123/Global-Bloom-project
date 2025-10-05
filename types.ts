
export type Page = 'dashboard' | 'data-pipeline' | 'detection-models' | 'case-studies' | 'guidance';

export interface BloomEvent {
  id: string;
  lat: number;
  lng: number;
  intensity: number; // 0 to 1
  name: string;
  year: number;
}

export interface TimeSeriesData {
  month: string;
  ndvi: number;
}
