"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var dbSchema_1 = require("../models/dbSchema");
var array = ["https://media2.giphy.com/media/OmK8lulOMQ9XO/200.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6906250b-3723-428a-8031-17d9d49ba493/d51jxyi-2bf0d49b-900c-4e0d-8666-cd28b76a9263.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MDYyNTBiLTM3MjMtNDI4YS04MDMxLTE3ZDlkNDliYTQ5M1wvZDUxanh5aS0yYmYwZDQ5Yi05MDBjLTRlMGQtODY2Ni1jZDI4Yjc2YTkyNjMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2djsxLjBGHb5L_Fp3xoky-RMwDYOj-E9zQ6zl-lUrhU", "https://media2.giphy.com/media/SUWn1xWsXKDbz6Y1Dx/giphy.gif", "https://media3.giphy.com/media/VNfKqvm8Lg4qQ/200.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6906250b-3723-428a-8031-17d9d49ba493/d51jtzc-0d6306f7-3bee-4ef4-831c-c8a85ec07257.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MDYyNTBiLTM3MjMtNDI4YS04MDMxLTE3ZDlkNDliYTQ5M1wvZDUxanR6Yy0wZDYzMDZmNy0zYmVlLTRlZjQtODMxYy1jOGE4NWVjMDcyNTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TNp9ZcHtTYHBnZydHPnpUupNwWGSDJi8MOGbXmguc9E"];
var randomElement = array[Math.floor(Math.random() * array.length)];
module.exports = {
    category: 'Kick & Ban',
    description: 'Pushes the latest x bans.',
    permissions: ['BAN_MEMBERS'],
    slash: true,
    testOnly: true,
    guildOnly: true,
    minArgs: 1,
    expectedArgs: '<num1>',
    callback: function (_a) {
        var interaction = _a.interaction, args = _a.args;
        return __awaiter(void 0, void 0, void 0, function () {
            var num1, dza, guildID, channelID, banList, primoBanList, oxe, oxide, oxen, setton, result2, xyz, i, embed;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        interaction.deferReply()
                            .then()["catch"](console.error);
                        num1 = parseInt(args[0]);
                        dza = 0;
                        if (!(num1 <= 750 && num1 > 0)) return [3 /*break*/, 11];
                        guildID = interaction.guild;
                        channelID = interaction.channel;
                        return [4 /*yield*/, (guildID === null || guildID === void 0 ? void 0 : guildID.bans.fetch())];
                    case 1:
                        banList = _b.sent();
                        return [4 /*yield*/, (banList === null || banList === void 0 ? void 0 : banList.map(function (user) { return user.user.id; }))];
                    case 2:
                        primoBanList = _b.sent();
                        return [4 /*yield*/, dbSchema_1["default"].countDocuments()];
                    case 3:
                        oxe = _b.sent();
                        oxide = oxe;
                        oxen = [];
                        setton = oxe.toString();
                        return [4 /*yield*/, dbSchema_1["default"].find({
                                _id: { $gt: (oxide - num1), $lt: (oxide - 1) }
                            })];
                    case 4:
                        result2 = _b.sent();
                        xyz = 0;
                        while (xyz < (num1 - 1)) {
                            //    console.log((result2[xyz].userID))
                            oxen.push((result2[xyz].userID));
                            xyz += 1;
                        }
                        i = 0;
                        _b.label = 5;
                    case 5:
                        if (!(i < (num1 - 2))) return [3 /*break*/, 10];
                        return [4 /*yield*/, dbSchema_1["default"].find({ 'userID': oxen[i] }).count()];
                    case 6:
                        if (!((_b.sent()) === 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, (guildID === null || guildID === void 0 ? void 0 : guildID.members.ban(oxen[i]).then(
                            // async user => {await channelID?.send( { content: `Banned ${user}`} )}
                            )["catch"](function (err) { dza += 1; }))];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        interaction.followUp({
                            content: 'x must be 1-740, inclusive'
                        });
                        _b.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 5];
                    case 10:
                        embed = new discord_js_1.MessageEmbed()
                            .setColor("#e2c37a")
                            .setDescription("Attempted to ban **".concat(num1, "** users, with ").concat(dza, " exceptions."))
                            .setImage(randomElement);
                        interaction.followUp({
                            embeds: [embed]
                        });
                        _b.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    }
};
