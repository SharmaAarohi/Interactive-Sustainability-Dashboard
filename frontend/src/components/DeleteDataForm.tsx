// import React, { useState } from 'react';
// const months = [
//     { value: '01', label: 'January' },
//     { value: '02', label: 'February' },
//     { value: '03', label: 'March' },
//     { value: '04', label: 'April' },
//     { value: '05', label: 'May' },
//     { value: '06', label: 'June' },
//     { value: '07', label: 'July' },
//     { value: '08', label: 'August' },
//     { value: '09', label: 'September' },
//     { value: '10', label: 'October' },
//     { value: '11', label: 'November' },
//     { value: '12', label: 'December' }
//   ];
// const DeleteDataForm: React.FC<{ onDelete: (start: string, end: string) => void }> = ({ onDelete }) => {
//   const [startMonth, setStartMonth] = useState('');
//   const [startYear, setStartYear] = useState('');
//   const [endMonth, setEndMonth] = useState('');
//   const [endYear, setEndYear] = useState('');

//   const handleDelete = (e: React.FormEvent) => {
//     e.preventDefault();
//     const startDate = `${startYear}-${startMonth}`;
//     const endDate = `${endYear}-${endMonth}`;
//     onDelete(startDate, endDate);
//   };

//   return (
//     <form onSubmit={handleDelete}>
//       <h4>Delete Data from Range</h4>
//       <select value={startMonth} onChange={(e) => setStartMonth(e.target.value)} required>
//         <option value="">Start Month</option>
//         {months.map((m) => (
//           <option key={m.value} value={m.value}>{m.label}</option>
//         ))}
//       </select>
//       <input type="number" placeholder="Start Year" value={startYear} onChange={(e) => setStartYear(e.target.value)} required />
      
//       <select value={endMonth} onChange={(e) => setEndMonth(e.target.value)} required>
//         <option value="">End Month</option>
//         {months.map((m) => (
//           <option key={m.value} value={m.value}>{m.label}</option>
//         ))}
//       </select>
//       <input type="number" placeholder="End Year" value={endYear} onChange={(e) => setEndYear(e.target.value)} required />
      
//       <button type="submit">Delete Data</button>
//     </form>
//   );
// };

// export default DeleteDataForm;

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

interface DeleteDataFormProps {
  onDelete: (start: string, end: string) => void;
  onDeleteAll: () => void;
}

const DeleteDataForm: React.FC<DeleteDataFormProps> = ({ onDelete, onDeleteAll }) => {
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    const startDate = `${startYear}-${startMonth}`;
    const endDate = `${endYear}-${endMonth}`;
    onDelete(startDate, endDate);
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <h4>Delete Data from Range</h4>
        <select value={startMonth} onChange={(e) => setStartMonth(e.target.value)} required>
          <option value="">Start Month</option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Start Year"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          required
        />
        <p></p>
        <select value={endMonth} onChange={(e) => setEndMonth(e.target.value)} required>
          <option value="">End Month</option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="End Year"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          required
        />
        <p></p>
        <button type="submit">Delete Data</button>
      </form>
      <p></p>
      {/* Add a separate button to remove all data */}
      <button onClick={onDeleteAll} style={{ marginTop: '1rem', backgroundColor: 'red', color: 'white' }}>
        Remove All Data
      </button>
    </div>
  );
};

export default DeleteDataForm;
