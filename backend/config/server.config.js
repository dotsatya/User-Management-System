import dotenv from "dotenv";
dotenv.config();

export const serverConfig = {
  port: process.env.PORT || 5000,
};

export const dbDetails = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
};

export const frontendConfig = {
  frontend_url1: process.env.FRONTEND_URL1 || "http://localhost:3000",
  frontend_url2: process.env.FRONTEND_URL2 || "http://localhost:3001",
}; 

export const authConfig = {
  JWT_SECRET: process.env.JWT_SECRET,
};
