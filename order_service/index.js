import express from 'express';
import mongoose from 'mongoose';
import { dbConnection } from './config/dbConnection.js';
import { routeNotFound } from './middleware/routeNotFound.js';

const app = express();
// MongoDB Configuration
dbConnection(app)

app.use('*',routeNotFound)
