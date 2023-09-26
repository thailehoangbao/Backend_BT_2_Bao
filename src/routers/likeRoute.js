import express from 'express';
import { getListLikesFollowRestaurants,getListLikesFollowUsers,postAddLikeToRes,deleteDeleteLikeToRes } from '../controllers/likeControllers.js';
const likeRoute = express.Router();

//Thả like vào nhà hàng
likeRoute.post('/add-like/:resid/:userid', postAddLikeToRes);

//Xóa like nhà hàng
likeRoute.delete('/delete-like/:resid/:userid', deleteDeleteLikeToRes);

// lấy danh sách like của nhà hàng đó khi truyền vào mã nhà hàng
likeRoute.get('/get-listlike-res/:resid', getListLikesFollowRestaurants);

// lấy danh sách like của user đó khi truyền vào mã user
likeRoute.get('/get-listlike-user/:userid', getListLikesFollowUsers);


export default likeRoute;