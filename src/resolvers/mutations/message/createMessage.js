const { models } = require("mongoose")

module.exports = async (_, {input}, {models}) => {
    message = await models.Message.create(input);
    console.log(message);
    return message;
}