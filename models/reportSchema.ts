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
    alts: reqArray,
    socials: reqArray,
    summary: reqString,
    evidence: reqString,
    colour: reqString,
    image: reqString,
    type: reqString,
})

const name = 'reports'
export default mongoose.models[name] ||
    mongoose.model(name, reportSchema, name)