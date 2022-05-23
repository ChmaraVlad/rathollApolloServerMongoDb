const { models } = require("mongoose")

module.exports = async (_, {input}, {models}) => {
    
    const filter = { _id: input._id };
    const update = { text: input.newText };

    const updatedMessage = await models.Message.findOneAndUpdate(filter, update, {new: true});
   
    return updatedMessage;
}