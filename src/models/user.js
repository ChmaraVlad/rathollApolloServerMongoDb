const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: false,
        trim: true
    }
});

// const ERC20Coin = mongoose.model("ERC20Coin", erc20CoinSchema);
// module.exports = { ERC20Coin };
module.exports = mongoose.model("User", userSchema);