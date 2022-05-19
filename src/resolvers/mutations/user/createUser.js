const { models } = require("mongoose")

module.exports = async (_, {input}, {models}) => {
    newUser = await models.User.create(input);
    return newUser;
}