# Interactive Sustainability Dashboard

## About the Project
Oren is a B2B software company focused on helping industrial companies measure and improve their sustainability metrics. This project is an **Interactive Sustainability Dashboard** designed to:
- Provide insights into sustainability metrics like **carbon emissions**, **water usage**, and **waste generated**.
- Allow users to input, view, filter, and export sustainability data.
- Compare user data with **industry benchmarks** for actionable insights.

This dashboard is built using **Next.js (React Framework)** for the frontend and **Node.js with Express** for the backend. It supports features like:
- User authentication (login and registration).
- Input and deletion of sustainability metrics.
- Data visualization using Recharts.
- Exporting data in **CSV** and **PDF** formats.

---

## Folder Structure
The project structure is organized as follows:

```
interactive_sustainability_dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Next.js pages for routing
│   │   ├── services/          # API calls
│   │   ├── styles/            # CSS Modules
│   │   ├── types/             # TypeScript interfaces
│   │   ├── utils/             # Utility functions
│   │   └── context/           # Context API for global state management
│   ├── public/                # Static assets like images
│   ├── .next/                 # Next.js build output
│   ├── package.json           # Frontend dependencies
│   └── tsconfig.json          # TypeScript configuration
├── backend/
│   ├── config/                # Database and environment configurations
│   ├── models/                # Sequelize models for database tables
│   ├── controllers/           # Business logic for routes
│   ├── middleware/            # Authentication middleware
│   ├── routes/                # API route definitions
│   ├── utils/                 # Helper functions
│   ├── package.json           # Backend dependencies
│   └── server.ts              # Main backend server file
```

---

## Technologies Used

### **Frontend**
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: CSS Modules, Tailwind CSS
- **Data Visualization**: Recharts
- **TypeScript**: Strongly-typed codebase for maintainability

### **Backend**
- **Server**: Node.js with Express.js
- **Database**: PostgreSQL (configured via Sequelize ORM)
- **Authentication**: JWT-based authentication
- **Error Handling**: Custom middleware for API responses

---

## Features
### **Frontend**
1. **User Authentication**: Login and registration pages.
2. **Dashboard**:
   - Display metrics in a visually interactive chart.
   - Industry benchmarks comparison.
3. **Data Management**:
   - Add, view, filter, and delete sustainability metrics.
4. **Data Export**:
   - Export data to CSV and PDF.

### **Backend**
1. **Authentication**:
   - Register new users.
   - Authenticate users with JWT.
2. **API Endpoints**:
   - CRUD operations for sustainability metrics.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js (16.x or above)](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Clone the Repository
```bash
git clone https://github.com/SharmaAarohi/Interactive-Sustainability-Dashboard.git
cd Interactive-Sustainability-Dashboard
```

---

### Setup Environment Variables
1. **Backend**: Create a `.env` file inside the `backend/` directory:
   ```env
   PORT=5000
   JWT_SECRET=somethingrandom1234
   DATABASE_URL=postgresql://oren:MHFMhKdxu1MmfYVUxAJuQCvaUcaVyhiD@dpg-csub5utumphs738p82og-a.oregon-postgres.render.com/sustainability_dashboard
   ```

2. **Frontend**: Create a `.env.local` file inside the `frontend/` directory:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   ```

---

### Run the Project Locally
1. **Backend**:
   - Navigate to the `backend/` directory:
     ```bash
     cd backend
     npm install
     npm run build
     npm start
     ```
   - The backend will be available at `http://localhost:5000`.

2. **Frontend**:
   - Open a new terminal and navigate to the `frontend/` directory:
     ```bash
     cd frontend
     npm install
     npm run build
     npx serve out
     ```
   - The frontend will be available at `http://localhost:3000`.

---

## Deployment

### Deploying the Frontend (Netlify)

https://sustainabilitydashboard3.netlify.app/login/

To test deplyed link:
Register with a new Gmail ID, eg: test9@gmail.com and a 10-charater password, eg: password123

### Deploying the Backend (Render)

https://interactive-sustainability-dashboard-3.onrender.com/auth

---

## API Endpoints (Backend)
### **Authentication**
- `POST /api/auth/register` → Register a new user.
- `POST /api/auth/login` → Authenticate user and return JWT.

### **Metrics**
- `GET /api/metrics` → Fetch all metrics for the authenticated user.
- `POST /api/metrics` → Add a new metric.
- `DELETE /api/metrics` → Delete specific metrics by date range.

---

## Screenshots
### Login Page
![image](https://github.com/user-attachments/assets/8fe7ee74-1fa0-4050-a098-ccab24e5a1e2)

### Register Page
![image](https://github.com/user-attachments/assets/201f1162-aa69-44b0-8f1c-ba7f9a012b03)

### Dashboard
![Screenshot 2024-11-19 033249](https://github.com/user-attachments/assets/64b83374-e627-47fb-8de2-5d5b07182c08)

![image](https://github.com/user-attachments/assets/671e4d1c-7f1d-4fca-a330-eed8dfd1db0a)

![Screenshot 2024-11-19 033306](https://github.com/user-attachments/assets/c3060a84-55b5-49c6-a083-e84e4be58790)

![Screenshot 2024-11-19 033327](https://github.com/user-attachments/assets/6b07a49b-0803-40b7-8a08-951ecf4fabf8)

### Export as CSV function:
![Screenshot 2024-11-19 033406](https://github.com/user-attachments/assets/1dc08fbe-ea36-4fcc-a94e-c43e37c81c5)

### Export as PDF Function:

![Screenshot 2024-11-19 033420](https://github.com/user-attachments/assets/586cea41-b0a3-4da8-9208-ab8e8514dc00)

### Mobile View:
![WhatsApp Image 2024-11-23 at 00 27 31_55cb493f](https://github.com/user-attachments/assets/e7fcc075-a3a7-43b2-8e14-a781760a65b2)

---
