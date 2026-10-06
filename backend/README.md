# Backend - User Management System

This folder contains the backend API for the project. It is built with Express.js and Sequelize, and it powers the frontend by handling user registration, login, authentication, user retrieval, and admin management operations.

## Project concept

This repository is split into two main folders:

- `backend/` - API server, database model, authentication logic, and user management endpoints
- `frontend/` - Next.js web interface that consumes the API

The backend is the core service layer of the application. It receives requests from the frontend, validates data, manages database operations, and issues JWT-based authentication.

## Included functionality

- User registration with password hashing
- User login with JWT token generation
- Logout by clearing the auth cookie
- Fetch current logged-in user details
- Fetch all users for admin access
- Get, update, and delete user records by ID
- MySQL database integration using Sequelize
- CORS and cookie support for frontend communication

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
├── README.md
└── node_modules/
```

## Technology stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT for authentication
- bcryptjs for password hashing
- cookie-parser
- CORS
- dotenv

## Environment variables

Create a `.env` file in this folder with values like:

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

The backend will run on:

```text
http://localhost:5000
```

## API overview

### Authentication

- `POST /api/auth/register` - register a new user
- `POST /api/auth/login` - log in a user and create a cookie token
- `POST /api/auth/logout` - clear the auth cookie
- `GET /api/auth/userdata` - get the current authenticated user

### User management

- `GET /api/getallusers` - fetch all users
- `GET /api/getuser/:id` - get a user by ID
- `PATCH /api/getuser/:id/edit` - update a user's info
- `DELETE /api/getuser/:id/delete` - delete a user

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

The model is synced automatically when the app starts using Sequelize.

## Notes

This folder is responsible for the project’s server-side logic and data layer. The frontend depends on this API for all authentication and user operations, so this backend must be running before using the application end-to-end.
