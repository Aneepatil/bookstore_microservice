import {Schema,model} from 'mongoose';

const userSchema = new Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    age:{
        type: 'string',
        required: true
    },
    role:{
        type: 'string',
        default:"user",
        enum:["admin", "user"]
    }
},{timestamps: true})

export const User = model('User',userSchema);