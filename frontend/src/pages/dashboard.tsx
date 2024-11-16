import Navbar from '../components/navbar';
import styles from '../styles/dashboard.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DeleteDataForm from '../components/DeleteDataForm';
import ViewRangeForm from '../components/ViewRangeForm';
import InputForm from '../components/InputForm';
import MetricChart from '../components/MetricChart';
import ExportButtons from '../components/ExportButtons';
import { MetricData } from '../types/MetricData';
const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [filteredMetrics, setFilteredMetrics] = useState<MetricData[]>([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirect if not logged in
    }
  }, [router]);

  const handleFormSubmit = (newData: MetricData) => {
    const updatedMetrics = [...metrics, newData];
    setMetrics(updatedMetrics);
    localStorage.setItem('metrics', JSON.stringify(updatedMetrics));
  };

  const handleDeleteData = (start: string, end: string) => {
    const updatedMetrics = metrics.filter((metric) => {
      const metricDate = `${metric.year}-${metric.month}`;
      return metricDate < start || metricDate > end;
    });
    setMetrics(updatedMetrics);
    localStorage.setItem('metrics', JSON.stringify(updatedMetrics));
  };

  const handleFilterData = (start: string, end: string) => {
    const filteredMetrics = metrics.filter((metric) => {
      const metricDate = `${metric.year}-${metric.month}`;
      return metricDate >= start && metricDate <= end;
    });
    setFilteredMetrics(filteredMetrics);
  };
  // New handler to delete all data
  const handleDeleteAllData = () => {
    setMetrics([]);
    localStorage.removeItem('metrics'); // Clear all metrics from localStorage
  };

// return (
//   <div className={styles.dashboardContainer}>
//     <Navbar />
//     <div className={styles.container}>
//       <div className={styles.topButtons}>
//         <button
//           onClick={() => {
//             localStorage.removeItem('token');
//             router.push('/login'); // Redirect to login page
//           }}
//           className={styles.logoutButton}
//         >
//           Logout
//         </button>
//         <ExportButtons metrics={metrics} />
//       </div>
//       <InputForm onSubmit={handleFormSubmit} />
//       <DeleteDataForm onDelete={handleDeleteData} onDeleteAll={handleDeleteAllData} />
//       <ViewRangeForm onFilter={handleFilterData} />
//       <div className={styles.metrics}>
//         <MetricChart metrics={filteredMetrics.length > 0 ? filteredMetrics : metrics} />
//       </div>
//     </div>
//   </div>
// );
// };

// export default DashboardPage;


// Inside dashboard.tsx

return (
  <div className={styles.dashboardContainer}>
    <Navbar />
    <div className={styles.container}>
      <div className={styles.topButtons}>
      <ExportButtons metrics={metrics} />
        <button
          onClick={() => {
            localStorage.removeItem('token');
            router.push('/login'); // Redirect to login page
          }}
          className={styles.logoutButton}
        >
          Logout
        </button>
        
      </div>

      {/* Form Section */}
      <div className={styles.formSection}>
        <InputForm onSubmit={handleFormSubmit} />
        <DeleteDataForm onDelete={handleDeleteData} onDeleteAll={handleDeleteAllData} />
        <ViewRangeForm onFilter={handleFilterData} />
      </div>

      <div className={styles.metrics}>
        <MetricChart metrics={filteredMetrics.length > 0 ? filteredMetrics : metrics} />
      </div>
    </div>
  </div>
);
}

export default DashboardPage;