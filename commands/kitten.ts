import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
let array = ["https://media2.giphy.com/media/OmK8lulOMQ9XO/200.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6906250b-3723-428a-8031-17d9d49ba493/d51jxyi-2bf0d49b-900c-4e0d-8666-cd28b76a9263.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MDYyNTBiLTM3MjMtNDI4YS04MDMxLTE3ZDlkNDliYTQ5M1wvZDUxanh5aS0yYmYwZDQ5Yi05MDBjLTRlMGQtODY2Ni1jZDI4Yjc2YTkyNjMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2djsxLjBGHb5L_Fp3xoky-RMwDYOj-E9zQ6zl-lUrhU", "https://media2.giphy.com/media/SUWn1xWsXKDbz6Y1Dx/giphy.gif", "https://media3.giphy.com/media/VNfKqvm8Lg4qQ/200.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6906250b-3723-428a-8031-17d9d49ba493/d51jtzc-0d6306f7-3bee-4ef4-831c-c8a85ec07257.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MDYyNTBiLTM3MjMtNDI4YS04MDMxLTE3ZDlkNDliYTQ5M1wvZDUxanR6Yy0wZDYzMDZmNy0zYmVlLTRlZjQtODMxYy1jOGE4NWVjMDcyNTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TNp9ZcHtTYHBnZydHPnpUupNwWGSDJi8MOGbXmguc9E"]
let randomElement = array[Math.floor(Math.random() * array.length)];
export default {
    category: 'Cat',
    description: 'Free cat',
    slash: 'both',
    testOnly: true,

    callback: ({ message }) => {
        const embed = new MessageEmbed()
        .setDescription("Meow meow")
        .setTitle('cat')
        .setImage(randomElement)
        .setColor('#e2c37a')
        return embed
    }
} as ICommand