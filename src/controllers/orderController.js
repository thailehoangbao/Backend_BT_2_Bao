import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const models = initModels(sequelize);

//Thêm đánh giá vào nhà hàng 
const postOrderFood = async (req, res) => {
    let { food_id, user_id } = req.params;
    let { amount, arr_sub_id } = req.body;
    let currentTime = new Date();
    let timestamp = Math.floor(currentTime.getTime() / 1000);
    let code = timestamp;

    let data = {
        food_id,
        user_id,
        amount: Number(amount),
        arr_sub_id,
        code
    }

    await models.orders.create(data);


    res.status(200).send(data);
}

export { postOrderFood };