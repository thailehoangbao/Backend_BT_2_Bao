import { Sequelize, where } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const models = initModels(sequelize);

//Thêm like vào nhà hàng 
const postAddLikeToRes = async (req, res) => {
    let {resid,userid} = req.params;
    const date = new Date();

    let data = await models.like_res.create({
        user_id: userid,
        res_id: resid,
        date_like: date
    })

    res.status(200).send(data);
}

//Xóa like nhà hàng
const deleteDeleteLikeToRes = async (req, res) => {
    let {resid,userid} = req.params;

    await models.like_res.destroy({
        where: {
            user_id: userid,
            res_id: resid
        }
    })
    res.status(200).send('Delete Like Success!');
}

const getListLikesFollowRestaurants = async (req, res) => {
    let {resid} = req.params;
    let listLikes = await models.restaurants.findAll({
        where: {
            res_id: resid
        },
        include: ['like_res']
    })
    res.send(listLikes);
}

const getListLikesFollowUsers = async (req, res) => {
    let {userid} = req.params;
    let listLikes = await models.users.findAll({
        where: {
            user_id: userid
        },
        include: ['like_res']
    })

    res.send(listLikes);
}

export { getListLikesFollowRestaurants,getListLikesFollowUsers,postAddLikeToRes ,deleteDeleteLikeToRes};