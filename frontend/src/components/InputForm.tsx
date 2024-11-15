import React, { useState } from 'react';

const months = [
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' }
];

const InputForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [carbonEmissions, setCarbonEmissions] = useState('');
  const [waterUsage, setWaterUsage] = useState('');
  const [wasteGenerated, setWasteGenerated] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { year, month, carbonEmissions: parseFloat(carbonEmissions), waterUsage: parseFloat(waterUsage), wasteGenerated: parseFloat(wasteGenerated) };
    onSubmit(data);
    setYear('');
    setMonth('');
    setCarbonEmissions('');
    setWaterUsage('');
    setWasteGenerated('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <h4>Input data</h4>
      <select value={month} onChange={(e) => setMonth(e.target.value)} required>
        <option value="">Select Month</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
      <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
      <input type="number" placeholder="Carbon Emissions (tons)" value={carbonEmissions} onChange={(e) => setCarbonEmissions(e.target.value)} required />
      <input type="number" placeholder="Water Usage (liters)" value={waterUsage} onChange={(e) => setWaterUsage(e.target.value)} required />
      <input type="number" placeholder="Waste Generated (kg)" value={wasteGenerated} onChange={(e) => setWasteGenerated(e.target.value)} required />
      <button type="submit">Add Data</button>
    </form>
  );
};

export default InputForm;
