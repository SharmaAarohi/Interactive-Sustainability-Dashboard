import jsPDF from "jspdf";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => void; // Adjust `any` to the correct type if available
  }
}
