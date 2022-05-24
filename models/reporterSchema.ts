import * as mongoose from 'mongoose'

const reporterSchema = new mongoose.Schema({
    _id: String,
    col: String,
    userId: String
})

const name = 'reporters'
export default mongoose.models[name] ||
    mongoose.model(name, reporterSchema, "reporters")