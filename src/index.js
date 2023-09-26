import express from 'express';
import cors from 'cors';
import rootRoute from './routers/rootRoutes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.listen(8081);

app.use('/api',rootRoute);