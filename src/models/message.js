const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
    username: {
        type: String,
        unique: false,
        trim: true
    },
    text: {
        type: String,
        trim: false
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    },
    updatedAt: {
        type: Date, 
        default: Date.now 
    },
});

// const ERC20Coin = mongoose.model("ERC20Coin", erc20CoinSchema);
// module.exports = { ERC20Coin };
module.exports = mongoose.model("Message", messageSchema);