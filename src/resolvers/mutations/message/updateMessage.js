const { models } = require("mongoose")

module.exports = async (_, {id, input}, {models}) => {
    
    const filter = { _id: input._id };
    const update = { text: input.newText };

    const updatedMessage = await models.Message.findOneAndUpdate(filter, update);
   
    return updatedMessage;
}