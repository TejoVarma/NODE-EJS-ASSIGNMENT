const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    promoted : {
        type : Boolean,
        default : null
    }
});

const userModel = new mongoose.model('USERS', userSchema);

module.exports = userModel;