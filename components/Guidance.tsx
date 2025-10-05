import React from 'react';

const GuidelineSection: React.FC<{ title: string; lead: string; children: React.ReactNode }> = ({ title, lead, children }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-green-400">{title}</h2>
        <p className="text-md text-gray-300 font-medium mb-4">For the <span className="font-bold">{lead}</span></p>
        <div className="prose prose-invert prose-p:text-gray-400 prose-li:text-gray-400 max-w-none">
            {children}
        </div>
    </div>
);

const Guidance: React.FC = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-white">Implementation Guide</h1>
                <p className="text-gray-400 mt-1">
                    This application is a fully functional frontend prototype. It uses mock data to simulate the entire workflow.
                    Below are the next steps for each project lead to replace the mock components with a real, data-driven backend.
                </p>
            </header>

            <GuidelineSection title="Step 1: Data Collection & Preprocessing" lead="Data Lead">
                <p>Your goal is to build the data pipeline that feeds this dashboard. The current mock data for bloom events and time series charts needs to be replaced with real, processed satellite data.</p>
                <ul>
                    <li>
                        <strong>Setup Backend Service:</strong> Create a backend server (e.g., using Python with Flask or FastAPI) that can serve data via a REST API.
                    </li>
                    <li>
                        <strong>Connect to GEE/NASA APIs:</strong> Implement logic in your backend to connect to Google Earth Engine or other NASA data sources. Use libraries like <code>earthengine-api</code> to query and download time-series data for specific regions and vegetation indices (NDVI, EVI).
                    </li>
                    <li>
                        <strong>Implement Preprocessing:</strong> Your backend should perform the steps outlined in the 'Data Pipeline' section (cloud masking, calibration, etc.).
                    </li>
                    <li>
                        <strong>Create API Endpoints:</strong>
                        <ul>
                            {/* FIX: Replaced `{year}` and `{region}` with placeholders that don't conflict with JSX syntax. */}
                            <li>An endpoint like <code>/api/bloom-events?year=[year]</code> that returns GeoJSON data of detected blooms.</li>
                            <li>An endpoint like <code>/api/ndvi-series?year=[year]&amp;region=[region]</code> that returns monthly NDVI values.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Update Frontend:</strong> Modify the <code>Dashboard.tsx</code> component to fetch data from your new API endpoints instead of using <code>MOCK_BLOOM_EVENTS</code> and <code>MOCK_TIME_SERIES_DATA</code>.
                    </li>
                </ul>
            </GuidelineSection>

            <GuidelineSection title="Step 2: Bloom Detection & Analysis" lead="Detection Lead">
                <p>Your task is to implement the detection models and integrate them into the backend. The static accuracy numbers and model descriptions should become dynamic and based on real model performance.</p>
                <ul>
                    <li>
                        <strong>Develop Models:</strong> Using Python with libraries like Scikit-learn, TensorFlow, or PyTorch, implement the bloom detection models (e.g., Random Forest, LSTM) described in the 'Detection Models' section.
                    </li>
                    <li>
                        <strong>Train & Validate:</strong> Use the preprocessed data from the Data Lead to train and validate your models. Use ground-truth data where possible.
                    </li>
                    <li>
                        <strong>Integrate with Backend:</strong> The trained models should be part of the backend service. The service should use these models to process the satellite data and identify bloom events. The <code>/api/bloom-events</code> endpoint should return the output of your model.
                    </li>
                    <li>
                        {/* FIX: Replaced `{...}` with `[...]` to avoid JSX spread syntax error. */}
                        <strong>(Optional) Gemini for Insights:</strong> You can use the Gemini API in your backend to generate automatic summaries of bloom trends. For example, after analyzing a year's data, you could prompt Gemini: "Summarize the key differences in vegetation blooms between 2023 and 2024 based on this data: [...]".
                    </li>
                </ul>
            </GuidelineSection>
            
            <GuidelineSection title="Step 3: Tool Enhancement & Gemini Integration" lead="Visualization & Tool Development Lead">
                <p>Your role is to enhance the frontend with real-time data and potentially integrate live calls to the Gemini API for dynamic content generation, handled via the backend.</p>
                <ul>
                    <li>
                        <strong>Real Mapping Library:</strong> Replace the <code>MapPlaceholder</code> with an interactive mapping library like Leaflet or Mapbox GL JS to display the real GeoJSON data.
                    </li>
                    <li>
                        <strong>Backend for Gemini:</strong> To use the Gemini API securely, create a backend endpoint (e.g., <code>/api/generate-narrative</code>). The frontend will send a request to this endpoint, and the backend will securely call the Gemini API with your API key. <strong>Never expose your API key on the frontend.</strong>
                    </li>
                    <li>
                        <strong>Dynamic Content:</strong> Use this new backend endpoint to replace static text. For instance, in the 'Case Studies' section, you could generate a narrative dynamically by sending key data points about a bloom event to Gemini.
                    </li>
                </ul>
                 <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                    {/* FIX: Updated example to use Node.js/Express and correct @google/genai usage, which is more consistent with the frontend stack and project guidelines. */}
                    <h4 className="font-bold text-white">Example Gemini API Backend Logic (Node.js/Express):</h4>
                    <pre className="text-xs text-gray-300 bg-black p-2 rounded mt-2 overflow-x-auto"><code>
{`
// This is conceptual server-side code
// In your Express.js app:
// import { GoogleGenAI } from "@google/genai";
// const ai = new GoogleGenAI({apiKey: process.env.API_KEY});

app.post('/api/generate-narrative', async (req, res) => {
    const data = req.body;
    const prompt = \`Create a short, engaging narrative for a case study about a \${data.bloom_type} bloom in \${data.location} which had an intensity of \${data.intensity}.\`;
    
    // In a real application, you would make the API call here.
    // const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
    // const generated_text = response.text;
    
    // For now, we return a mock response.
    const generated_text = \`A significant \${data.bloom_type} event was observed in \${data.location}...\`;

    res.json({ narrative: generated_text });
});
`}
                    </code></pre>
                </div>
            </GuidelineSection>
        </div>
    );
};

export default Guidance;
