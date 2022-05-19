const { models } = require("mongoose")

module.exports = async (_, {_id}, {models}) => {
    return await models.User.findById(_id);
}