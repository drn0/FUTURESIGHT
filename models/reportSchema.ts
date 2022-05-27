import mongoose, { Schema } from 'mongoose'
import { MessageEmbed } from 'discord.js'

const reqString = {
    type: String,
    required: true
}

const reqArray = {
    type: Array,
    required: true
}

const reportSchema = new Schema({
    _id: reqString,
    userIden: Array,
    accounts: Array,
    summary: String,
    evidence: String,
    colour: String,
    public: Boolean,
    notes: String
})

const name = 'reports'
export default mongoose.models[name] ||
    mongoose.model(name, reportSchema, 'reports')