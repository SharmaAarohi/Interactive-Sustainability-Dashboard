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
     npm run start
     ```
   - The backend will be available at `http://localhost:5000`.

2. **Frontend**:
   - Open a new terminal and navigate to the `frontend/` directory:
     ```bash
     cd frontend
     npm install
     npm run dev
     ```
   - The frontend will be available at `http://localhost:3000`.

---

## Deployment

### Deploying the Frontend (Netlify)
1. Go to [Netlify](https://www.netlify.com/) and create an account.
2. Link your GitHub repository to a new site.
3. Set the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `frontend/.next`
4. Add environment variables under the "Site Settings" → "Environment Variables":
   - `NEXT_PUBLIC_BACKEND_URL` → Your backend deployment URL.

### Deploying the Backend (Render)
1. Go to [Render](https://render.com/) and create an account.
2. Create a new **Web Service**.
3. Link your GitHub repository.
4. Set the build and start commands:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `node dist/server.js`
5. Add environment variables in the "Environment" tab:
   - `PORT`
   - `JWT_SECRET`
   - `DATABASE_URL`

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
![Login Page](frontend/public/img/login-page.png)

### Dashboard
![Dashboard](frontend/public/img/dashboard.png)

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## License
This project is licensed under the MIT License.

---

## Contact
For queries, feel free to contact:
- **Author**: [Sharma Aarohi](https://github.com/SharmaAarohi)

---
