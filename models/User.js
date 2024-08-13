import {models, Schema, model} from "mongoose";
import { requestToBodyStream } from "next/dist/server/body-streams";

const UserSchema = new Schema({
    name : {
        type: String,
        required: [true, "Name is required"],
    },
    email : {
        type: String,
        unique: [true, "Email must be unique"],
        required: [true, "Email is required"],
    },
    image : {
        type: String,
    }, 
    streak: {
        type: Number,
        default: 1,
    },
    lastActivityDate : {
        type: Date,
        default: Date.now,
    
    }

});

const User = models.User || model("User", UserSchema);

export default User;