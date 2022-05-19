module.exports = async (_, {id}, {models}) => {
    const deleteCoin = await models.Message.deleteOne({_id: id});
    
    if(deleteCoin.deletedCount) return{id: id}
}