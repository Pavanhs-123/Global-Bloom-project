
import React, { useState, useMemo } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BloomEvent, TimeSeriesData } from '../types';

// MOCK DATA
const MOCK_BLOOM_EVENTS: BloomEvent[] = [
  { id: '1', lat: 35.68, lng: 139.69, intensity: 0.9, name: 'Cherry Blossoms, Japan', year: 2023 },
  { id: '2', lat: 34.05, lng: -118.24, intensity: 0.7, name: 'Poppy Bloom, USA', year: 2023 },
  { id: '3', lat: 52.37, lng: 4.89, intensity: 0.95, name: 'Tulip Fields, Netherlands', year: 2023 },
  { id: '4', lat: -25.27, lng: 133.77, intensity: 0.5, name: 'Wildflower Bloom, Australia', year: 2023 },
  { id: '5', lat: 28.61, lng: 77.20, intensity: 0.6, name: 'Mustard Fields, India', year: 2024 },
  { id: '6', lat: 45.42, lng: -75.69, intensity: 0.8, name: 'Tulip Festival, Canada', year: 2024 },
  { id: '7', lat: 33.44, lng: -112.07, intensity: 0.85, name: 'Desert Bloom, Arizona', year: 2024 },
];

const MOCK_TIME_SERIES_DATA: { [key: number]: TimeSeriesData[] } = {
  2023: [
    { month: 'Jan', ndvi: 0.2 }, { month: 'Feb', ndvi: 0.25 }, { month: 'Mar', ndvi: 0.4 },
    { month: 'Apr', ndvi: 0.65 }, { month: 'May', ndvi: 0.75 }, { month: 'Jun', ndvi: 0.6 },
    { month: 'Jul', ndvi: 0.5 }, { month: 'Aug', ndvi: 0.45 }, { month: 'Sep', ndvi: 0.4 },
    { month: 'Oct', ndvi: 0.3 }, { month: 'Nov', ndvi: 0.25 }, { month: 'Dec', ndvi: 0.2 },
  ],
  2024: [
    { month: 'Jan', ndvi: 0.22 }, { month: 'Feb', ndvi: 0.3 }, { month: 'Mar', ndvi: 0.48 },
    { month: 'Apr', ndvi: 0.7 }, { month: 'May', ndvi: 0.8 }, { month: 'Jun', ndvi: 0.65 },
    { month: 'Jul', ndvi: 0.55 }, { month: 'Aug', ndvi: 0.5 }, { month: 'Sep', ndvi: 0.45 },
    { month: 'Oct', ndvi: 0.35 }, { month: 'Nov', ndvi: 0.28 }, { month: 'Dec', ndvi: 0.22 },
  ],
};

const MapPlaceholder: React.FC<{ events: BloomEvent[] }> = ({ events }) => {
  return (
    <div className="relative w-full h-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
      <img src="https://picsum.photos/seed/map/1200/800" alt="World Map" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0">
        {events.map(event => (
          <div
            key={event.id}
            className="absolute"
            style={{
              left: `${(event.lng + 180) / 360 * 100}%`,
              top: `${(-event.lat + 90) / 180 * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse"
              style={{ opacity: event.intensity, transform: `scale(${0.5 + event.intensity})` }}
              title={event.name}
            />
          </div>
        ))}
      </div>
       <div className="absolute top-4 left-4 bg-black/50 p-2 rounded-md">
        <h3 className="text-white font-semibold">Global Bloom Hotspots</h3>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const filteredEvents = useMemo(() => MOCK_BLOOM_EVENTS.filter(e => e.year === selectedYear), [selectedYear]);

  const totalBlooms = filteredEvents.length;
  const avgIntensity = (filteredEvents.reduce((acc, curr) => acc + curr.intensity, 0) / totalBlooms * 100).toFixed(0);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-white">Global Bloom Dashboard</h1>
        <p className="text-gray-400 mt-1">Visualizing vegetation phenology from space.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-[60vh] bg-gray-800 p-4 rounded-xl shadow-lg">
          <MapPlaceholder events={filteredEvents} />
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-4 text-green-300">Controls</h3>
            <label htmlFor="year-slider" className="block mb-2 text-sm font-medium text-gray-300">
              Year: <span className="font-bold text-white">{selectedYear}</span>
            </label>
            <input
              id="year-slider"
              type="range"
              min="2023"
              max="2024"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-4 text-green-300">Key Metrics ({selectedYear})</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Blooms Detected:</span>
                <span className="font-bold text-2xl text-white">{totalBlooms}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Avg. Intensity:</span>
                <span className="font-bold text-2xl text-white">{avgIntensity}%</span>
              </div>
               <div className="flex justify-between items-center">
                <span className="text-gray-400">Peak Bloom Month:</span>
                <span className="font-bold text-2xl text-white">May</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="font-semibold text-lg mb-4 text-green-300">Global Average Vegetation Index (NDVI) Trend - {selectedYear}</h3>
        <div className="h-64">
           <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_TIME_SERIES_DATA[selectedYear]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorNdvi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', color: '#f3f4f6' }}
                itemStyle={{ color: '#d1d5db' }}
                labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="ndvi" stroke="#4ade80" fillOpacity={1} fill="url(#colorNdvi)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
