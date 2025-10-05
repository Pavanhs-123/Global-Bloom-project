import React from 'react';

interface CaseStudyCardProps {
  title: string;
  location: string;
  imageUrl: string;
  application: string;
  narrative: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, location, imageUrl, application, narrative }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group">
    <div className="relative h-48">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{location}</p>
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm font-semibold text-green-400 mb-2">{application}</p>
      <p className="text-gray-400">{narrative}</p>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
    const studies = [
    {
      title: "Cherry Blossoms in Japan",
      location: "Kyoto, Japan",
      imageUrl: "https://picsum.photos/seed/japan/600/400",
      application: "Tourism & Climate Studies",
      narrative: "Tracking the iconic 'sakura' bloom provides crucial data for tourism and serves as a sensitive indicator of climate change, as bloom timings have shifted earlier over the decades."
    },
    {
      title: "Desert Wildflowers in the US",
      location: "Arizona, USA",
      imageUrl: "https://picsum.photos/seed/arizona/600/400",
      application: "Ecology & Conservation",
      narrative: "Monitoring 'superblooms' in arid regions helps ecologists understand plant-pollinator interactions and the resilience of desert ecosystems to climatic shifts like El Niño events."
    },
    {
      title: "Cotton Bloom in India",
      location: "Maharashtra, India",
      imageUrl: "https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145591/irrigatedfarmland_oli_2019163_lrg.jpg",
      application: "Agriculture & Yield Prediction",
      narrative: "Detecting the peak flowering stage of cotton crops enables farmers to optimize irrigation and pesticide application, leading to better yield predictions and improved crop management."
    },
    {
      title: "Pollen Surges in North America",
      location: "Continental USA",
      imageUrl: "https://www.nasa.gov/wp-content/uploads/2023/04/north-america-forests-2020.jpg",
      application: "Public Health",
      narrative: "By monitoring the greening of forests and grasslands, we can predict the timing and intensity of pollen surges, providing early warnings for allergy sufferers and public health agencies."
    }
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-white">Applications & Case Studies</h1>
        <p className="text-gray-400 mt-1">Connecting technical outputs to real-world impact.</p>
      </header>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {studies.map(study => (
          <CaseStudyCard key={study.title} {...study} />
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-white mb-2">Lead: The Communicator & Strategist</h3>
        <p className="text-gray-400">This role bridges the gap between the technical project and its stakeholders. The goal is to identify target applications, conduct case studies, and craft compelling narratives that showcase the project's value to farmers, conservationists, and policymakers. The final output is a polished report and presentation demonstrating the tool's usability.</p>
      </div>
    </div>
  );
};

export default CaseStudies;