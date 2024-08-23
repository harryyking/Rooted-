import {model, models, Schema} from "mongoose";

const TestimonySchema = new Schema({
    creator :{
        type: Schema.Types.ObjectId,
        ref : 'User',
        
    },
    title : {
        type: String,

    },
    body : {
        type : String, 
    }
})

const Testimony = models.Testimony || model("Testimony", TestimonySchema);

export default Testimony;