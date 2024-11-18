// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// interface MetricData {
//   year: string;
//   month: string;
//   carbonEmissions: number;
//   waterUsage: number;
//   wasteGenerated: number;
// }

// // Dummy industry benchmarks for comparison
// const industryBenchmarks = {
//   carbonEmissions: 100, // Example value in kilo-tons
//   waterUsage: 200,      // Example value in million-liters
//   wasteGenerated: 50    // Example value in tons
// };

// // Function to add benchmarks to user data
// const addBenchmarks = (data: MetricData[]) => {
//   return data.map((entry) => ({
//     ...entry,
//     carbonEmissionsBenchmark: industryBenchmarks.carbonEmissions,
//     waterUsageBenchmark: industryBenchmarks.waterUsage,
//     wasteGeneratedBenchmark: industryBenchmarks.wasteGenerated,
//   }));
// };

// const MetricChart: React.FC<{ metrics: MetricData[] }> = ({ metrics }) => {
//   // Add benchmarks to each data point
//   const dataWithBenchmarks = addBenchmarks(metrics);

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={dataWithBenchmarks}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="year" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
        
//         {/* User's data lines */}
//         <Line type="monotone" dataKey="carbonEmissions" stroke="#8884d8" name="Carbon Emissions (User)" />
//         <Line type="monotone" dataKey="waterUsage" stroke="#82ca9d" name="Water Usage (User)" />
//         <Line type="monotone" dataKey="wasteGenerated" stroke="#ffc658" name="Waste Generated (User)" />
        
//         {/* Industry benchmark lines with dashed styling */}
//         <Line type="monotone" dataKey="carbonEmissionsBenchmark" stroke="#8884d8" strokeDasharray="5 5" name="Carbon Emissions (Benchmark)" />
//         <Line type="monotone" dataKey="waterUsageBenchmark" stroke="#82ca9d" strokeDasharray="5 5" name="Water Usage (Benchmark)" />
//         <Line type="monotone" dataKey="wasteGeneratedBenchmark" stroke="#ffc658" strokeDasharray="5 5" name="Waste Generated (Benchmark)" />
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
  carbonEmissions: 100, // Example value in kilo-tons
  waterUsage: 200,      // Example value in million-liters
  wasteGenerated: 50    // Example value in tons
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

// Custom tooltip component
const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { month, year } = payload[0].payload; // Access month and year from the data
    return (
      <div style={{ backgroundColor: '#c2c8d2', padding: '5px', border: '1px solid #ccc' }}>
        <p>{`Date: ${month}-${year}`}</p>
        <p>{`Carbon Emissions: ${payload[0].value} kilo-tons`}</p>
        <p>{`Water Usage: ${payload[1].value} million-liters`}</p>
        <p>{`Waste Generated: ${payload[2].value} tons`}</p>
        <p>{`Carbon Emissions Benchmark: ${payload[3].value} kilo-tons`}</p>
        <p>{`Water Usage Benchmark: ${payload[4].value} million-liters`}</p>
        <p>{`Waste Generated Benchmark: ${payload[5].value} tons`}</p>
      </div>
    );
  }
  return null;
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
        <Tooltip content={<CustomTooltip />} /> {/* Use custom tooltip */}
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
