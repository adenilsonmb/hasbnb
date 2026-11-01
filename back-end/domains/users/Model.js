import {Schema, model} from "mongoose";


const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    passoword: String,
});

export default model("User", userSchema)