# User Frontend - User Management System

This Next.js application provides the user-facing part of the User Management
System. It includes user registration, login, profile viewing, and profile
editing. The admin interface is maintained separately in `frontend-admin/`.

## Repository structure

```text
User Management System/
├── backend/          # Express API and MySQL/Sequelize integration
├── frontend-admin/   # Admin login and user-management dashboard
├── frontend-users/   # User registration, login, and profile pages
└── README.md         # Project overview and setup
```

## User features

- Register a user account
- Log in and log out
- View the signed-in user's profile
- Edit profile information
- Validate form fields before submitting

## Routes

| Route | Description |
| --- | --- |
| `/` | User-facing home page |
| `/signup` | Create a user account |
| `/login` | Sign in to a user account |
| `/user/dashboard` | View the signed-in user's profile |
| `/user/editProfile` | Edit profile information |

This app does not contain the admin login or admin dashboard; those are in
`frontend-admin/`.

## Tech stack

- Next.js and React
- TypeScript
- Tailwind CSS
- Axios for API requests

## Setup

Run these commands from the repository root:

```bash
cd frontend-users
npm install
```

Create a `.env.local` file in `frontend-users/` and set the backend API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

By default, the app is available at <http://localhost:3000>. To run it alongside
the admin frontend, use a separate port, for example:

```bash
npm run dev -- --port 3001
```

## Backend

The API is in the sibling `backend/` folder. Start and configure the backend
separately using its README. The user frontend calls these endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/userdata`
- `PATCH /api/getuser/:id/edit`

Authentication requests use cookies, so the backend must allow credentialed
requests from the frontend origin.
