
import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  icon: React.ReactNode;
  text: string;
}> = ({ page, currentPage, setCurrentPage, icon, text }) => {
  const isActive = currentPage === page;
  return (
    <li
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
        isActive ? 'bg-green-500 text-white shadow-lg' : 'hover:bg-gray-700'
      }`}
      onClick={() => setCurrentPage(page)}
    >
      {icon}
      <span className="ml-3 font-medium">{text}</span>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="w-64 bg-gray-800 p-4 flex flex-col justify-between shadow-2xl">
      <div>
        <div className="flex items-center mb-10 p-2">
          <svg className="w-10 h-10 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.884 11.536l.243-1.072a2 2 0 011.636-1.464h.012a2 2 0 011.636 1.464l.243 1.072M12 21a9 9 0 100-18 9 9 0 000 18z"></path></svg>
          <h1 className="text-xl font-bold text-white">BloomScope</h1>
        </div>
        <nav>
          <ul>
            <NavItem
              page="dashboard"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path></svg>}
              text="Dashboard"
            />
            <NavItem
              page="data-pipeline"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>}
              text="Data Pipeline"
            />
            <NavItem
              page="detection-models"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636L4.222 4.222m15.556 15.556L18.364 18.364M4.222 19.778L5.636 18.364m15.556-15.556L18.364 5.636"></path></svg>}
              text="Detection Models"
            />
            <NavItem
              page="case-studies"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>}
              text="Case Studies"
            />
             <NavItem
              page="guidance"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
              text="Implementation Guide"
            />
          </ul>
        </nav>
      </div>
      <div className="text-center text-xs text-gray-400 p-2">
        <p>Powered by React & Gemini</p>
        <p>&copy; 2024</p>
      </div>
    </aside>
  );
};

export default Sidebar;
