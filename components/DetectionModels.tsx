
import React from 'react';

interface ModelCardProps {
  title: string;
  category: string;
  description: string;
  accuracy?: number;
  tools: string[];
}

const ModelCard: React.FC<ModelCardProps> = ({ title, category, description, accuracy, tools }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col h-full border border-gray-700 hover:border-green-500 transition-all duration-300">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-semibold text-green-400">{category}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {accuracy && (
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{accuracy}%</p>
          <p className="text-xs text-gray-400">Accuracy</p>
        </div>
      )}
    </div>
    <p className="text-gray-400 my-4 flex-grow">{description}</p>
    <div className="mt-auto">
      <h4 className="font-semibold text-gray-300 mb-2">Tools:</h4>
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

const DetectionModels: React.FC = () => {
  const models = [
    {
      title: "Time-Series Analysis",
      category: "Statistical Model",
      description: "Utilizes moving averages and thresholding on NDVI data to define the onset, peak, and decline of bloom cycles. A robust baseline for identifying significant greening events.",
      accuracy: 88,
      tools: ["statsmodels", "tslearn", "Pandas"],
    },
    {
      title: "Random Forest Classifier",
      category: "Machine Learning",
      description: "A supervised model trained on spectral signatures and temporal features to classify pixels as 'bloom' or 'non-bloom'. Excellent for handling complex, non-linear relationships in the data.",
      accuracy: 94,
      tools: ["Scikit-learn", "Python", "Supervised ML"],
    },
    {
      title: "LSTM Network",
      category: "Deep Learning",
      description: "A Long Short-Term Memory (LSTM) network that analyzes sequences of satellite observations to predict the likelihood of a future bloom. Ideal for capturing temporal dependencies.",
      accuracy: 91,
      tools: ["TensorFlow", "PyTorch", "Keras"],
    },
    {
      title: "Convolutional Neural Network (CNN)",
      category: "Deep Learning",
      description: "A CNN that operates directly on multispectral satellite images, learning spatial and spectral patterns to identify different types of vegetation and crop blooms with high precision.",
      accuracy: 96,
      tools: ["TensorFlow", "PyTorch", "Spectral Classification"],
    }
  ];
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-white">Detection & Analysis Models</h1>
        <p className="text-gray-400 mt-1">Algorithms for identifying, monitoring, and predicting bloom events.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {models.map(model => (
          <ModelCard key={model.title} {...model} />
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-white mb-2">Lead: The Bloom Detector</h3>
        <p className="text-gray-400">This role develops the core algorithms that power the dashboard. Responsibilities include defining a 'bloom event,' performing time-series analysis, and building predictive models. The final deliverable is a validated bloom detection model and analytical results like trend graphs and maps.</p>
      </div>
    </div>
  );
};

export default DetectionModels;
