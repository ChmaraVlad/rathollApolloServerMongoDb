const { models } = require("mongoose")

module.exports = async (_, {input}, {models}) => {
    newERC20Coin = await models.Message.create(input);
    return newERC20Coin;
}