import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const models = initModels(sequelize);

//Thêm đánh giá vào nhà hàng 
const postAddRateToRes = async (req, res) => {
    let { res_id, user_id } = req.params;
    let { amount } = req.body;
    const date = new Date();

    let data = await models.rate_res.create({
        user_id: user_id,
        res_id: res_id,
        amount: amount,
        date_rate: date
    })

    res.status(200).send(data);
}

//Xóa đánh giá vào nhà hàng 
const deleteDeleteRateToRes = async (req, res) => {
    let { resid, userid } = req.params;

    await models.rate_res.destroy({
        where: {
            user_id: userid,
            res_id: resid
        }
    })
    res.status(200).send('Delete Rate Success!');
}

//Lấy danh sách rate theo nhà hàng 
const getListRateFollowRestaurants = async (req, res) => {
    let { res_id } = req.params;
    let listRate = await models.restaurants.findAll({
        where: {
            res_id: res_id
        },
        include: ['rate_res']
    })
    res.send(listRate);
}
//Lấy danh sách rate theo users
const getListRateFollowUsers = async (req, res) => {
    let { user_id } = req.params;
    let listRate = await models.users.findAll({
        where: {
            user_id: user_id
        },
        include: ['rate_res']
    })
    res.send(listRate);
}

export { postAddRateToRes, deleteDeleteRateToRes, getListRateFollowRestaurants, getListRateFollowUsers };