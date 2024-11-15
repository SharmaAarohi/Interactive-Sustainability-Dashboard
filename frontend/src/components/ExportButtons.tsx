import React from 'react';

const ExportButtons: React.FC<{ metrics: any[] }> = ({ metrics }) => {
  const exportToCSV = () => {
    const headers = ["Year", "Carbon Emissions", "Water Usage", "Waste Generated"];
    const rows = metrics.map(({ year, carbonEmissions, waterUsage, wasteGenerated }) => [year, carbonEmissions, waterUsage, wasteGenerated]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sustainability_metrics.csv";
    link.click();
  };

  return (
    <div>
      <button onClick={exportToCSV}>Export as CSV</button>
      {/* Add PDF export functionality here */}
    </div>
  );
};

export default ExportButtons;
