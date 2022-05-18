import mongoose from 'mongoose'

const dbSchema = new mongoose.Schema({
        _id: String,
        userID: String,
})

const name = 'scammerBans';
export default mongoose.models[name] ||
    mongoose.model(name, dbSchema, 'realBanDatabase')