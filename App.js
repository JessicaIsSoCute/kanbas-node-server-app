import express from 'express'
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
app.use(cors())
app.use(express.json());
Hello(app)
UserRoutes(app)
AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app)
Lab5(app)
app.listen(process.env.PORT || 4000)
