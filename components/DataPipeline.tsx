
import React from 'react';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, tools }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col h-full">
    <div className="flex items-center text-green-400 mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
    </div>
    <p className="text-gray-400 flex-grow">{description}</p>
    <div className="mt-4">
      <h4 className="font-semibold text-gray-300 mb-2">Skills/Tools:</h4>
      <div className="flex flex-wrap gap-2">
        {tools.map(tool => (
          <span key={tool} className="bg-gray-700 text-green-300 text-xs font-mono px-2 py-1 rounded">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const DataPipeline: React.FC = () => {
  const pipelineSteps = [
    {
      title: "1. Identify & Collect Data",
      description: "Identify and download suitable NASA datasets like MODIS, Landsat, and VIIRS. Use Google Earth Engine (GEE) for accessing large-scale time series data efficiently.",
      tools: ["Google Earth Engine", "sentinelsat", "earthengine-api"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    },
    {
      title: "2. Preprocess Raw Data",
      description: "Apply essential corrections to raw satellite imagery. This includes atmospheric correction, radiometric calibration, and masking out clouds and shadows to ensure data quality.",
      tools: ["Python", "Rasterio", "GDAL"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: "3. Extract Vegetation Indices",
      description: "Calculate indices like NDVI, EVI, and SAVI to quantify vegetation greenness and health. These indices are crucial for detecting changes and identifying bloom events.",
      tools: ["NumPy", "xarray", "Remote Sensing Knowledge"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
    },
    {
      title: "4. Prepare for Analysis",
      description: "Align temporal data into daily, monthly, or seasonal composites. Export the cleaned, processed data into analysis-ready formats like CSV or GeoTIFF time series.",
      tools: ["GeoPandas", "Pandas", "CSV", "GeoTIFF"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
    }
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-white">Data & Preprocessing Pipeline</h1>
        <p className="text-gray-400 mt-1">From raw satellite imagery to analysis-ready insights.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pipelineSteps.map(step => (
          <StepCard key={step.title} {...step} />
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-white mb-2">Lead: The Data Collector & Cleaner</h3>
        <p className="text-gray-400">This role is responsible for ensuring the project has a foundation of clean, reliable, and well-documented data. The output is a structured, preprocessed dataset of bloom-related parameters (e.g., NDVI time series) and the scripts used to generate it. This is the first and most critical step for the entire project.</p>
      </div>
    </div>
  );
};

export default DataPipeline;
