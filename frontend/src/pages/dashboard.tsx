// import Navbar from '../components/navbar'; 
// import styles from '../styles/dashboard.module.css';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';


// import InputForm from '../components/InputForm';
// import MetricChart from '../components/MetricChart';
// // import Comparison from '../components/Comparison';
// import ExportButtons from '../components/ExportButtons';

// // Define a type for the metric data
// interface MetricData {
//   year: string;
//   month: string;
//   carbonEmissions: number;
//   waterUsage: number;
//   wasteGenerated: number;
// }


// const DashboardPage: React.FC = () => {
//   const router = useRouter();
//   const [metrics, setMetrics] = useState<MetricData[]>([]); // State for storing user metrics
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  

//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   console.log('Token on dashboard load:', token); // Log to verify token presence
//   //   if (!token) {
//   //     router.push('/login'); // Redirect if no token is present
//   //   }
//   // }, [router]);
  
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/login');
//     } else {
//       setIsAuthenticated(true);
//       // Load persisted data from localStorage or API if available
//       const savedMetrics = localStorage.getItem('metrics');
//       if (savedMetrics) setMetrics(JSON.parse(savedMetrics));
//     }
//   }, [router]);


//     // Optional: Verify token by making a request to the protected backend route
//   //   fetch('http://localhost:5000/auth/dashboard', {
//   //     method: 'GET',
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   })
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error('Token is invalid');
//   //       }
//   //       setIsAuthenticated(true);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //       localStorage.removeItem('token');
//   //       router.push('/login');
//   //     });
//   // }, [router]);

//   // if (!isAuthenticated) {
//   //   return <p>Loading...</p>; // Display a loading message until authentication is verified
//   // }
//   // Function to handle form data submission
//   const handleFormSubmit = (newData: MetricData) => {
//     const updatedMetrics = [...metrics, newData];
//     setMetrics(updatedMetrics);
//     localStorage.setItem('metrics', JSON.stringify(updatedMetrics));
//   };

//   const handleDeleteData = (start: string, end: string) => {
//     const updatedMetrics = metrics.filter((metric) => {
//       const metricDate = `${metric.year}-${metric.month}`;
//       return metricDate < start || metricDate > end;
//     });
//     setMetrics(updatedMetrics);
//     localStorage.setItem('metrics', JSON.stringify(updatedMetrics));
//   };

//   const handleFilterData = (start: string, end: string) => {
//     const filteredMetrics = metrics.filter((metric) => {
//       const metricDate = `${metric.year}-${metric.month}`;
//       return metricDate >= start && metricDate <= end;
//     });
//     setFilteredMetrics(filteredMetrics);
//   };  
//   return (
//     <div className={styles.dashboardContainer}>
//       <Navbar />
//       <div className={styles.container}>
//         <InputForm onSubmit={handleFormSubmit} />
        
//         <div className={styles.metrics}>
//           <MetricChart metrics={metrics} />
//         </div>

//         {/* <Comparison metrics={metrics} /> */}

//         <ExportButtons metrics={metrics} />

//         <div className={styles.navigation}>
//           <Link href="/login">
//             <button onClick={() => localStorage.removeItem('token')}>
//               Logout
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
      const savedMetrics = localStorage.getItem('metrics');
      if (savedMetrics) setMetrics(JSON.parse(savedMetrics));
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
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <div className={styles.container}>
        <InputForm onSubmit={handleFormSubmit} />
        
        {/* Pass the new handler to DeleteDataForm */}
        <DeleteDataForm onDelete={handleDeleteData} onDeleteAll={handleDeleteAllData} />
        <ViewRangeForm onFilter={handleFilterData} />
        
        <div className={styles.metrics}>
          <MetricChart metrics={filteredMetrics.length > 0 ? filteredMetrics : metrics} />
        </div>

        <ExportButtons metrics={metrics} />

        <div className={styles.navigation}>
          <Link href="/login">
            <button onClick={() => localStorage.removeItem('token')}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;