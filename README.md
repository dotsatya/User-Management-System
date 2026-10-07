    # User Management System

This repository contains a full-stack user management application split into three main folders:

- `backend/` - Express API with MySQL and Sequelize
- `frontend-admin/` - Admin dashboard and admin login UI
- `frontend-users/` - User registration, login, and profile management UI

The project allows users to register, log in, view and update their profiles, while administrators can manage registered users through a dedicated admin interface.

## Project structure

```text
User Management System/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── frontend-admin/
│   ├── app/
│   ├── lib/
│   ├── public/
│   ├── .env.local
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   └── README.md
├── frontend-users/
│   ├── app/
│   ├── lib/
│   ├── public/
│   ├── .env.local
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   └── README.md
├── .gitignore
├── README.md
└── .env
```

## Components

### Backend

The `backend/` folder is the API layer of the application. It handles:

- User registration and login
- JWT-based authentication
- User profile retrieval and update
- Admin user management actions
- MySQL database operations with Sequelize
- Cookie-based auth flow for frontend requests

### Admin frontend

The `frontend-admin/` folder provides the admin interface. It includes:

- Admin login page
- User list management dashboard
- Edit and delete user actions
- Separate admin-specific UI and routes

### User frontend

The `frontend-users/` folder provides the user-facing app. It includes:

- Sign up page
- Login page
- User dashboard
- Profile editing page
- Frontend validation for user forms

## Tech stack

### Backend

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT
- bcryptjs
- cookie-parser
- CORS
- dotenv

### Frontend apps

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

## Setup

### 1. Backend

From the project root:

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with your database and app configuration:

```bash
PORT=5000
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=3306
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm start
```

The API runs on:

```text
http://localhost:5000
```

### 2. User frontend

```bash
cd frontend-users
npm install
```

Create a `.env.local` file inside `frontend-users/`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

By default, the user app runs on:

```text
http://localhost:3000
```

### 3. Admin frontend

```bash
cd frontend-admin
npm install
```

Create a `.env.local` file inside `frontend-admin/`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the admin frontend:

```bash
npm run dev
```

The admin app can run on:

```text
http://localhost:3000
```

If you want to run both frontend apps together, use different ports, for example:

```bash
cd frontend-users
npm run dev -- --port 3001

cd frontend-admin
npm run dev -- --port 3002
```

## Main features

- User signup and login
- JWT-based authentication with cookies
- User profile viewing and editing
- Admin dashboard for managing users
- MySQL-backed persistence via Sequelize
- Separate user and admin interfaces for different workflows

## How the system works together

1. The user frontend or admin frontend sends requests to the backend API.
2. The backend validates requests and interacts with the MySQL database.
3. JWT tokens are issued and stored in cookies for authenticated sessions.
4. The frontend apps read those responses to render the user and admin dashboards.

## Notes

- The backend must be running before using either frontend.
- Each frontend is a separate Next.js app and should be started independently.
- The admin and user interfaces are intentionally separated into their own folders.
