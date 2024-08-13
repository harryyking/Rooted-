import {models, Schema, model} from "mongoose";
import User from "./User";

const QuietSchema = new Schema({
    creator :{
        type: Schema.Types.ObjectId,
        ref : 'User',
        
    },
    verse : {
        type: String,
        required: [true, "Name is required"],
    },
    lesson : {
        type: String,
        required: [true, "Email is required"],
    },
    prayer : {
        type: String,
    },
    
});

const Quiet = models.Quiet || model("Quiet", QuietSchema);

export default Quiet;