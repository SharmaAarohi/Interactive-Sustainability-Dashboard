// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const MetricChart: React.FC<{ metrics: any[] }> = ({ metrics }) => {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={metrics}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="year" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="carbonEmissions" stroke="#8884d8" />
//         <Line type="monotone" dataKey="waterUsage" stroke="#82ca9d" />
//         <Line type="monotone" dataKey="wasteGenerated" stroke="#ffc658" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default MetricChart;


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MetricData {
  year: string;
  month: string;
  carbonEmissions: number;
  waterUsage: number;
  wasteGenerated: number;
}

// Dummy industry benchmarks for comparison
const industryBenchmarks = {
  carbonEmissions: 100, // Example value in tons
  waterUsage: 200,      // Example value in liters
  wasteGenerated: 50    // Example value in kg
};

// Function to add benchmarks to user data
const addBenchmarks = (data: MetricData[]) => {
  return data.map((entry) => ({
    ...entry,
    carbonEmissionsBenchmark: industryBenchmarks.carbonEmissions,
    waterUsageBenchmark: industryBenchmarks.waterUsage,
    wasteGeneratedBenchmark: industryBenchmarks.wasteGenerated,
  }));
};

const MetricChart: React.FC<{ metrics: MetricData[] }> = ({ metrics }) => {
  // Add benchmarks to each data point
  const dataWithBenchmarks = addBenchmarks(metrics);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dataWithBenchmarks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        {/* User's data lines */}
        <Line type="monotone" dataKey="carbonEmissions" stroke="#8884d8" name="Carbon Emissions (User)" />
        <Line type="monotone" dataKey="waterUsage" stroke="#82ca9d" name="Water Usage (User)" />
        <Line type="monotone" dataKey="wasteGenerated" stroke="#ffc658" name="Waste Generated (User)" />
        
        {/* Industry benchmark lines with dashed styling */}
        <Line type="monotone" dataKey="carbonEmissionsBenchmark" stroke="#8884d8" strokeDasharray="5 5" name="Carbon Emissions (Benchmark)" />
        <Line type="monotone" dataKey="waterUsageBenchmark" stroke="#82ca9d" strokeDasharray="5 5" name="Water Usage (Benchmark)" />
        <Line type="monotone" dataKey="wasteGeneratedBenchmark" stroke="#ffc658" strokeDasharray="5 5" name="Waste Generated (Benchmark)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MetricChart;
