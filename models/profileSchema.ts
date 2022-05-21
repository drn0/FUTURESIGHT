import mongoose, { Schema } from 'mongoose'

const reqString = {
    type: String,
    required: true
}

const reqInt = {
    type: Number,
    required: true
}

const profileSchema = new Schema({
    _id: reqString,
    userId: reqString,
    username: reqString,
    vouches: reqString,
    colour: reqString,
    image: reqString,
    type: reqString,
})

const name = 'staffinfo'
export default mongoose.models[name] ||
    mongoose.model(name, profileSchema, name)