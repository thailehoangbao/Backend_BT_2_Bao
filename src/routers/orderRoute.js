import express from 'express';
import { postOrderFood } from '../controllers/orderController.js';
const orderRoute = express.Router();

//Order food
orderRoute.post('/order-food/:food_id/:user_id', postOrderFood);

export default orderRoute;