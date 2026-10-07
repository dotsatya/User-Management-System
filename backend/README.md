# Backend - User Management System

This folder contains the API server for the project. It is the shared backend for both the user-facing frontend and the admin frontend.

## Repository structure

```text
User Management System/
├── backend/          # Express API, Sequelize models, auth logic, and routes
├── frontend-admin/   # Admin dashboard and login interface
├── frontend-users/   # User registration, login, and profile interface
├── README.md         # Project overview
├── .gitignore
└── .env
```

## What this backend does

The backend handles:

- User registration and login
- JWT-based authentication
- Cookie-based session handling
- Fetching authenticated user data
- Admin access to all users
- Updating and deleting user records
- MySQL database communication through Sequelize

## Folder structure

```text
backend/
├── config/
│   ├── dbConnect.config.js
│   └── server.config.js
├── controllers/
│   ├── authController.js
│   └── userData.js
├── models/
│   └── User.js
├── routes/
│   ├── allUsersRoutes.js
│   ├── authRoutes.js
│   └── userRoutes.js
├── .env
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── node_modules/
```

## Technology stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT
- bcryptjs
- cookie-parser
- CORS
- dotenv

## Environment variables

Create a `.env` file inside `backend/` with values similar to:

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

## Getting started

From this folder, install dependencies:

```bash
npm install
```

Then start the server:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

## API overview

### Authentication

- `POST /api/auth/register` - Register a new account
- `POST /api/auth/login` - Log in and generate a cookie-based JWT session
- `POST /api/auth/logout` - Clear the auth cookie
- `GET /api/auth/userdata` - Fetch the current logged-in user

### User management

- `GET /api/getallusers` - Get all users
- `GET /api/getuser/:id` - Get a specific user by ID
- `PATCH /api/getuser/:id/edit` - Update a user's information
- `DELETE /api/getuser/:id/delete` - Delete a user

## Database model

The `User` model includes:

- `id`
- `name`
- `username`
- `dob`
- `gender`
- `email`
- `phone`
- `address`
- `password`

The model is synchronized automatically when the server starts.

## Notes

This backend is required by both frontend applications. Start it before using either the user dashboard or the admin dashboard. It is the central service that connects the client apps to the MySQL database.
