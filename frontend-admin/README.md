# Admin Frontend - User Management System

This Next.js application provides the administrator interface for the User
Management System. It includes an admin login and a dashboard for viewing,
editing, and deleting user records. User registration and the user profile
dashboard live in the separate `frontend-users/` application.

## Repository structure

```text
User Management System/
├── backend/          # Express API and MySQL/Sequelize integration
├── frontend-admin/   # Admin login and user-management dashboard
├── frontend-users/   # User registration, login, and profile pages
└── README.md         # Project overview and setup
```

## Admin routes

| Route | Description |
| --- | --- |
| `/` | Redirects to the admin login |
| `/login` | Admin sign-in |
| `/admin/dashboard` | View, edit, and delete users |

This app does not provide an admin signup page or user-facing account pages.

## Tech stack

- Next.js and React
- TypeScript
- Tailwind CSS
- Axios for API requests
- lucide-react for dashboard icons

## Setup

Run these commands from the repository root:

```bash
cd frontend-admin
npm install
```

Create a `.env.local` file in `frontend-admin/` and set the backend API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

By default, the app is available at <http://localhost:3000>. To run it alongside
the user frontend, use a separate port, for example:

```bash
npm run dev -- --port 3001
```

## Backend

The API is in the sibling `backend/` folder. Start and configure the backend
separately using its README. The admin dashboard uses these endpoints:

- `GET /api/getallusers`
- `GET /api/getuser/:id`
- `PATCH /api/getuser/:id/edit`
- `DELETE /api/getuser/:id/delete`
- `POST /api/auth/logout`

The dashboard sends API requests with credentials enabled. Configure the
backend to allow credentialed requests from the admin frontend's origin.

## Admin login note

The current login page checks demo credentials in the frontend rather than
authenticating an administrator through a protected backend endpoint. This is
not secure authentication and must be replaced with server-side authentication
and authorization before deploying the admin app. Do not rely on a frontend
login check to protect admin data or operations.
