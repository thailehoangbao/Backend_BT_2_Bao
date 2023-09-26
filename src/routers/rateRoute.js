import express from 'express';
import { postAddRateToRes,deleteDeleteRateToRes, getListRateFollowRestaurants, getListRateFollowUsers } from '../controllers/rateController.js';
const rateRoute = express.Router();

//Thả rate vào nhà hàng
rateRoute.post('/rate-res/:res_id/:user_id', postAddRateToRes);

//Xóa rate 
rateRoute.delete('/delete-rate/:resid/:userid', deleteDeleteRateToRes);

//Lấy danh sách Rate theo nhà hàng
rateRoute.get('/list-rate-res/:res_id',getListRateFollowRestaurants)

//Lấy danh sách Rate theo users
rateRoute.get('/list-rate-user/:user_id', getListRateFollowUsers)

export default rateRoute;