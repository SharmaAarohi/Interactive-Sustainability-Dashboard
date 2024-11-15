module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/pages.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/pages.runtime.dev.js");

module.exports = mod;
}}),
"[externals]/ [external] (react/jsx-runtime, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("react/jsx-runtime");

module.exports = mod;
}}),
"[externals]/ [external] (react, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("react");

module.exports = mod;
}}),
"[externals]/ [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path");

module.exports = mod;
}}),
"[externals]/ [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("@opentelemetry/api");

module.exports = mod;
}}),
"[project]/src/pages/dashboard.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
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
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navbar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$dashboard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/styles/dashboard.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InputForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/InputForm.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MetricChart$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MetricChart.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ExportButtons.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DashboardPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [filteredMetrics, setFilteredMetrics] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        } else {
            setIsAuthenticated(true);
            const savedMetrics = localStorage.getItem('metrics');
            if (savedMetrics) setMetrics(JSON.parse(savedMetrics));
        }
    }, [
        router
    ]);
    const handleFormSubmit = (newData)=>{
        const updatedMetrics = [
            ...metrics,
            newData
        ];
        setMetrics(updatedMetrics);
        localStorage.setItem('metrics', JSON.stringify(updatedMetrics));
    };
    const handleDeleteData = (start, end)=>{
        const updatedMetrics = metrics.filter((metric)=>{
            const metricDate = `${metric.year}-${metric.month}`;
            return metricDate < start || metricDate > end;
        });
        setMetrics(updatedMetrics);
        localStorage.setItem('metrics', JSON.stringify(updatedMetrics));
    };
    const handleFilterData = (start, end)=>{
        const filteredMetrics = metrics.filter((metric)=>{
            const metricDate = `${metric.year}-${metric.month}`;
            return metricDate >= start && metricDate <= end;
        });
        setFilteredMetrics(filteredMetrics);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$dashboard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/dashboard.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$dashboard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InputForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSubmit: handleFormSubmit
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$dashboard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].metrics,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MetricChart$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            metrics: filteredMetrics.length > 0 ? filteredMetrics : metrics
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        metrics: metrics
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$dashboard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navigation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>localStorage.removeItem('token'),
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/dashboard.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/dashboard.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/dashboard.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DashboardPage;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__9d0b6a._.js.map