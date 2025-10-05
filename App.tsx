
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DataPipeline from './components/DataPipeline';
import DetectionModels from './components/DetectionModels';
import CaseStudies from './components/CaseStudies';
import Guidance from './components/Guidance';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'data-pipeline':
        return <DataPipeline />;
      case 'detection-models':
        return <DetectionModels />;
      case 'case-studies':
        return <CaseStudies />;
      case 'guidance':
        return <Guidance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
