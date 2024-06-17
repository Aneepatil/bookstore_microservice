import express from 'express';
import cors from 'cors';
import { dbConnection } from './config/dbConnection.js';
import bookRoute from './routes/bookRoute.js';
import { routeNotFound } from './middleware/routeNotFound.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';

const app = express();
// MongoDB Configuration
dbConnection(app)

app.use(cors(),express.json());

app.use('/',bookRoute)

app.use(routeNotFound)
app.use(globalErrorHandler)
