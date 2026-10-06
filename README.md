    # User Management System

This project is a full-stack application built with a Node.js/Express backend and a Next.js frontend. It allows users to register, log in, view their profile, and lets administrators manage all registered users.

## Project structure

```text
next form/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── app/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   └── README.md
├── .gitignore
└── README.md
```

## Backend

The backend is located in the `backend/` folder and is responsible for:

- User registration and authentication
- JWT-based login flow
- API routes for user data and admin actions
- Sequelize + MySQL database connection
- Cookie-based session management

### Backend stack

- Express.js
- MySQL
- Sequelize ORM
- JWT
- bcryptjs
- CORS
- dotenv

### Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

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

Run the backend:

```bash
npm start
```

## Frontend

The frontend is located in the `frontend/` folder and provides:

- Landing page
- Login page
- Registration page
- User dashboard
- Admin dashboard
- User management actions with API integration

### Frontend stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

### Frontend setup

```bash
cd frontend
npm install
```

Create a `.env.local` file inside `frontend/`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

Open the app in the browser at:

```text
http://localhost:3000
```

## Main features

- User signup and login
- JWT authentication with secure cookies
- Role-based access between user and admin flows
- User profile viewing and management
- Admin dashboard to view, edit, and delete users
- MySQL-backed persistence using Sequelize

## How it works together

1. The frontend sends requests to the backend API.
2. The backend validates credentials and interacts with the MySQL database.
3. JWT tokens are created and stored in cookies for authenticated requests.
4. The frontend uses those responses to render user/admin dashboards.

## Notes

Both folders must be started separately for the full application to work correctly. The backend should run before using the frontend for authentication and data operations.
