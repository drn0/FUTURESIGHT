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
    userId: reqString,
    username: reqString,
    accounts: reqArray,
    summary: reqString,
    evidence: reqString,
    colour: reqString,
})

const name = 'reports'
export default mongoose.models[name] ||
    mongoose.model(name, reportSchema, name)