import {Schema,model} from 'mongoose';

const bookSchema = new Schema({
    title:{
        type: 'string',
        required: true
    },
    auther:{
        type: 'string',
        required: true
    },
    numberOfPages:{
        type: 'string',
        required: true
    },
    publisher:{
        type: 'string',
        required: true
    }
},{timestamps: true})

export const Book = model('Book',bookSchema);