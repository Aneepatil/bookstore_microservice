import express from 'express';
import cors from 'cors';
import { dbConnection } from './config/dbConnection.js';
import { routeNotFound } from './middleware/routeNotFound.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';
import userRoute from './routes/userRoute.js';

const app = express();
// MongoDB Configuration
dbConnection(app)

app.use(express.json(),cors());


app.use("/", userRoute)

app.use(routeNotFound)
app.use(globalErrorHandler)
