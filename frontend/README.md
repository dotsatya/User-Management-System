# Frontend - User Management System

This folder contains the frontend application for the project. It is built with Next.js and handles the user-facing screens for authentication, profile management, and admin operations.

## Project concept

This repository is split into two main folders:

- `backend/` - Express.js API for authentication, user data, and admin actions
- `frontend/` - Next.js client application for the UI

The frontend does not work alone; it communicates with the backend API to log in, register users, fetch user details, and manage users from the admin dashboard.

## Included functionality

- User registration form
- Login page with validation
- Role-based redirect: admin vs regular user
- User dashboard showing profile information
- Admin dashboard for viewing, editing, and deleting users
- API communication using Axios with cookies and credentials

## Folder structure

```text
frontend/
├── app/
│   ├── admin/
│   ├── login/
│   ├── signup/
│   ├── user/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

## Getting started

From this folder, install dependencies:

```bash
npm install
```

Create a `.env.local` file in the `frontend` folder and add the backend URL:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Then run the frontend:

```bash
npm run dev
```

Open http://localhost:3000 to view the app in the browser.

## Backend connection

The backend is located in the sibling folder:

```text
../backend
```

Start the backend separately before using the app:

```bash
cd ../backend
npm install
npm start
```

The backend listens on port `5000` by default, and the frontend uses that value through `NEXT_PUBLIC_API_URL`.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

## Notes

This folder is focused on the client-side experience of the User Management System. The backend folder contains the server logic, MySQL/Sequelize configuration, and API endpoints that power the frontend.
