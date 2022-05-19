import mongoose, { Schema } from 'mongoose'

const reqString = {
    type: String,
    required: true
}

const reqInt = {
    type: Number,
    required: true
}

const reportSchema = new Schema({
    _id: reqString,
    userId: reqString,
    username: reqString,
    summary: reqString,
    evidence: reqString,
    colour: reqString,
    image: reqString,
    type: reqString,
})

const name = 'reports'
export default mongoose.models[name] ||
    mongoose.model(name, reportSchema, name)