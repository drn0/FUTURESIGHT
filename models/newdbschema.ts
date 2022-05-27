import mongoose from 'mongoose'

const newSSchema = new mongoose.Schema({
        _id: String,
        userID: String,
        reportedBy: String
})

const name = 'scammerBans';
export default mongoose.models[name] ||
    mongoose.model(name, newSSchema, 'newBandb')