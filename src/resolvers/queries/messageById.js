const { models } = require("mongoose")

module.exports = async (_, {id}, {models}) => {
    return await models.Message.findById(id);
}