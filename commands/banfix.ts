import { ICommand } from "wokcommands";
import dbSchema from "../models/dbSchema";
export default {
    category: 'Pruning',
    description: 'eli fucked up so now he has to fix it',
    slash: false,
    testOnly: true,
    ownerOnly: true,
    minArgs: 0,
    expectedArgs: '',

    callback: async ( { } ) => {
    const dbAmt = await dbSchema.countDocuments()
    async function dbParse() {
        for (let i = 1; i < dbAmt; i++) {
            let dc = await dbSchema.findOne({_id: i})
            if (dc === undefined) {
                await dbSchema.updateOne({_id: i + 1}, {$set: {_id: i}})
                console.log(`${i} was undefined but i fixed it`)     
            }
        }}
    }
} as ICommand