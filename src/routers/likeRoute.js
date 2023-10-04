import express from 'express';
import { getListLikesFollowRestaurants,getListLikesFollowUsers,postAddLikeToRes,disLikeToRes } from '../controllers/likeControllers.js';
const likeRoute = express.Router();

//Thả like vào nhà hàng
likeRoute.post('/add-like/:resid/:userid', postAddLikeToRes);

//Xóa like nhà hàng
likeRoute.post('/dislike/:resid/:userid', disLikeToRes);

// lấy danh sách like của nhà hàng đó khi truyền vào mã nhà hàng
likeRoute.get('/get-listlike-res/:resid', getListLikesFollowRestaurants);

// lấy danh sách like của user đó khi truyền vào mã user
likeRoute.get('/get-listlike-user/:userid', getListLikesFollowUsers);


export default likeRoute;