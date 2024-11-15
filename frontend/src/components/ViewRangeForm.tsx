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
const ViewRangeForm: React.FC<{ onFilter: (start: string, end: string) => void }> = ({ onFilter }) => {
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const startDate = `${startYear}-${startMonth}`;
    const endDate = `${endYear}-${endMonth}`;
    onFilter(startDate, endDate);
  };

  return (
    <form onSubmit={handleFilter}>
      <h4>View Data from Range</h4>
      <select value={startMonth} onChange={(e) => setStartMonth(e.target.value)} required>
        <option value="">Start Month</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
      <input type="number" placeholder="Start Year" value={startYear} onChange={(e) => setStartYear(e.target.value)} required />
      
      <select value={endMonth} onChange={(e) => setEndMonth(e.target.value)} required>
        <option value="">End Month</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
      <input type="number" placeholder="End Year" value={endYear} onChange={(e) => setEndYear(e.target.value)} required />
      
      <button type="submit">View Data</button>
    </form>
  );
};

export default ViewRangeForm;
