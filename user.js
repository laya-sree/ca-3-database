const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        unique: true,
        type: String
    }
});

const EventSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    date:{
        required:true
    },
    location:{
        required: true
    },
    organizerId:{
        required: true
    }
});

const user = mongoose.model("User",UserSchema);
const event = mongoose.model("Event",EventSchema);
module.exports = user,event;