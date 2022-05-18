import { Permissions } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Banning',
    description: 'Pushes every single ban. Every single one.',
    slash: 'both',
    testOnly: true,

    callback: ({ message }) => {
        return 'lol jk he doesnt do shit rn'
    }
} as ICommand