import mongoose from 'mongoose'

const channelSchema = new mongoose.Schema({
        _id: String,
        chanID: String,
        guildID: String,
})

const name = 'scamBans';
export default mongoose.models[name] ||
    mongoose.model(name, channelSchema, 'reportChannel')