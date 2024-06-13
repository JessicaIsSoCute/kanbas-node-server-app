import express from 'express'
import session from "express-session";
import "dotenv/config";
import mongoose from "mongoose";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js"
import CourseRoutes from './Kanbas/Courses/routes.js'
import cors from "cors"
import ModuleRoutes from './Kanbas/Modules/routes.js'
import AssignmentRoutes from './Kanbas/Assignments/routes.js'
import UserRoutes from './Users/routes.js';
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
  cors({
   credentials: true,
   origin: process.env.NETLIFY_URL || "http://localhost:3000",
 })
)
app.use(express.json());
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
Hello(app)
UserRoutes(app)
AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app)
Lab5(app)
app.listen(process.env.PORT || 4000)
