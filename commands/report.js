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
var reportSchema_1 = require("../models/reportSchema");
var modEmbed_1 = require("../features/modEmbed");
var reporterSchema_1 = require("../models/reporterSchema");
var channelSchema_1 = require("../models/channelSchema");
module.exports = {
    category: 'Scammer DB',
    description: 'Creates a DB report',
    slash: false,
    testOnly: true,
    minArgs: 1,
    expectedArgs: '<report> [term]',
    callback: function (_a) {
        var message = _a.message, args = _a.args, client = _a.client;
        return __awaiter(void 0, void 0, void 0, function () {
            var channelID, reportNum, senderuid, sendsuid, repVerify, result, publicBool, useruid, userName_1, xyi_1, colour, helpmeacc, reportEmbed, xyzz, filter, restula, xoxo, u;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        channelID = message.channel;
                        reportNum = args[0];
                        senderuid = message.author.id;
                        sendsuid = senderuid;
                        return [4 /*yield*/, reporterSchema_1["default"].countDocuments({ userId: senderuid })];
                    case 1:
                        repVerify = (_b.sent()) > 0;
                        return [4 /*yield*/, reportSchema_1["default"].countDocuments({ _id: reportNum })];
                    case 2:
                        if (!((_b.sent()) > 0)) return [3 /*break*/, 20];
                        return [4 /*yield*/, reportSchema_1["default"].findOne({
                                _id: reportNum
                            })];
                    case 3:
                        result = _b.sent();
                        publicBool = result.public;
                        useruid = result.userIden;
                        if (!(useruid != undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, client.users.fetch(useruid)
                                .then(function () {
                                userName_1 = " - ".concat(xyi_1);
                            })["catch"](function () {
                                userName_1 = '';
                            })];
                    case 4:
                        xyi_1 = _b.sent();
                        _b.label = 5;
                    case 5:
                        colour = result.colour;
                        helpmeacc = (result.accounts.toString());
                        reportEmbed = new discord_js_1.MessageEmbed()
                            .setColor(colour)
                            .setTitle("\u208A\u02DA\u231Creport ".concat(result._id, "\u231F\u2027\u208A"))
                            .setAuthor("".concat(userName_1))
                            .setDescription("`".concat(useruid).concat(userName_1, "`"))
                            .addFields({ name: "╭╴other/related accounts‧੭", value: "".concat(helpmeacc.replace(/\,/g, ''), "\u200B") }, { name: "╭╴summary‧੭", value: "".concat(result.summary, "\u200B") }, { name: "╭╴evidence‧੭", value: "".concat(result.evidence, "\u200B") }, { name: "╭╴notes‧੭", value: "".concat(result.notes) })
                            .setImage("https://cdn.discordapp.com/attachments/972947718546817126/972949805083017226/lev_invis_divider.png");
                        if (!publicBool) return [3 /*break*/, 7];
                        return [4 /*yield*/, channelID.send({
                                embeds: [reportEmbed]
                            })];
                    case 6:
                        xyzz = _b.sent();
                        if (channelID.type === 'GUILD_NEWS') {
                            xyzz.crosspost();
                        }
                        else {
                            xyzz;
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        channelID.send({
                            content: "Sorry, it seems report ".concat(reportNum, " is not public.")
                        });
                        _b.label = 8;
                    case 8:
                        if (!(args[1] === 'edit' && repVerify)) return [3 /*break*/, 11];
                        channelID.send({
                            embeds: [modEmbed_1.modEmbed]
                        });
                        return [4 /*yield*/, message.react('🪡').then(function () { return message.react('🧶'); }).then(function () { return message.react('🕶').then(function () { return message.react('🧥'); }); })];
                    case 9:
                        _b.sent();
                        filter = function (reaction, user) {
                            return ['🪡', '🧶', '🕶', '🧥'].includes(reaction.emoji.name) && user.id === sendsuid;
                        };
                        return [4 /*yield*/, message.awaitReactions({ filter: filter, max: 1, time: 500000 })
                                .then(function (collected) { return __awaiter(void 0, void 0, void 0, function () {
                                var reaction, filtered_1, filtered_2, filtered_3, filtered_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            reaction = collected.first();
                                            if (!((reaction === null || reaction === void 0 ? void 0 : reaction.emoji.name) === '🪡')) return [3 /*break*/, 2];
                                            filtered_1 = (function (message) {
                                                return message.author.id === sendsuid;
                                            });
                                            return [4 /*yield*/, channelID.send("Please enter the accounts owned by this user in this format: platform: username , and give each their own message <@!".concat(sendsuid, ">. Note that you can only add up to ten accounts; link any more in the evidence or notes section. The bot ends the interaction if there is inactivity for 20 seconds."))
                                                    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                                                    var carcinoGeneticist, mesCol;
                                                    return __generator(this, function (_a) {
                                                        carcinoGeneticist = [];
                                                        mesCol = channelID.createMessageCollector({ filter: filtered_1, max: 5, time: 60000 });
                                                        mesCol.on('collect', function (m) {
                                                            carcinoGeneticist.push(m.content);
                                                        });
                                                        mesCol.on('end', function (collected) { return __awaiter(void 0, void 0, void 0, function () {
                                                            var carciLength, ixy, aToredor, _a, _b, _c;
                                                            return __generator(this, function (_d) {
                                                                switch (_d.label) {
                                                                    case 0:
                                                                        carciLength = carcinoGeneticist.length;
                                                                        ixy = 0;
                                                                        aToredor = [];
                                                                        while (ixy < carciLength * 2) {
                                                                            if (ixy % 2 === 0) {
                                                                                aToredor.push(carcinoGeneticist[ixy / 2]);
                                                                            }
                                                                            else {
                                                                                aToredor.push('\n');
                                                                            }
                                                                            ixy += 1;
                                                                        }
                                                                        return [4 /*yield*/, reportSchema_1["default"].updateOne({ _id: reportNum }, { $set: { accounts: aToredor } })];
                                                                    case 1:
                                                                        _d.sent();
                                                                        _b = (_a = channelID).send;
                                                                        _c = "Updated accounts with:\n ".concat;
                                                                        return [4 /*yield*/, reportSchema_1["default"].findOne({ _id: reportNum })];
                                                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.apply("Updated accounts with:\n ", [_d.sent()])])];
                                                                    case 3:
                                                                        _d.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 8];
                                        case 2:
                                            if (!((reaction === null || reaction === void 0 ? void 0 : reaction.emoji.name) === '🧶')) return [3 /*break*/, 4];
                                            filtered_2 = (function (message) {
                                                return message.author.id === sendsuid;
                                            });
                                            return [4 /*yield*/, channelID.send("Please enter a summary of the situation <@!".concat(sendsuid, ">."))
                                                    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                                                    var karkat, mesCol;
                                                    return __generator(this, function (_a) {
                                                        karkat = '';
                                                        mesCol = channelID.createMessageCollector({ filter: filtered_2, max: 1, time: 60000 });
                                                        mesCol.on('collect', function (m) {
                                                            karkat = m.content;
                                                        });
                                                        mesCol.on('end', function (collected) { return __awaiter(void 0, void 0, void 0, function () {
                                                            var _a, _b, _c;
                                                            return __generator(this, function (_d) {
                                                                switch (_d.label) {
                                                                    case 0: return [4 /*yield*/, reportSchema_1["default"].updateOne({ _id: reportNum }, { $set: { summary: karkat } })];
                                                                    case 1:
                                                                        _d.sent();
                                                                        _b = (_a = channelID).send;
                                                                        _c = "Updated accounts with:\n ".concat;
                                                                        return [4 /*yield*/, reportSchema_1["default"].findOne({ _id: reportNum })];
                                                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.apply("Updated accounts with:\n ", [_d.sent()])])];
                                                                    case 3:
                                                                        _d.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 3:
                                            _a.sent();
                                            return [3 /*break*/, 8];
                                        case 4:
                                            if (!((reaction === null || reaction === void 0 ? void 0 : reaction.emoji.name) === '🕶')) return [3 /*break*/, 6];
                                            filtered_3 = (function (message) {
                                                return message.author.id === sendsuid;
                                            });
                                            return [4 /*yield*/, channelID.send("Entry format: [websitename](evidenceurl). If there is more than one link, add a | seperator. <@!".concat(sendsuid, ">."))
                                                    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                                                    var karkat, mesCol;
                                                    return __generator(this, function (_a) {
                                                        karkat = '';
                                                        mesCol = channelID.createMessageCollector({ filter: filtered_3, max: 1, time: 60000 });
                                                        mesCol.on('collect', function (m) {
                                                            karkat = m.content;
                                                        });
                                                        mesCol.on('end', function (collected) { return __awaiter(void 0, void 0, void 0, function () {
                                                            var _a, _b, _c;
                                                            return __generator(this, function (_d) {
                                                                switch (_d.label) {
                                                                    case 0: return [4 /*yield*/, reportSchema_1["default"].updateOne({ _id: reportNum }, { $set: { evidence: karkat } })];
                                                                    case 1:
                                                                        _d.sent();
                                                                        _b = (_a = channelID).send;
                                                                        _c = "Updated accounts with:\n ".concat;
                                                                        return [4 /*yield*/, reportSchema_1["default"].findOne({ _id: reportNum })];
                                                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.apply("Updated accounts with:\n ", [_d.sent()])])];
                                                                    case 3:
                                                                        _d.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 5:
                                            _a.sent();
                                            return [3 /*break*/, 8];
                                        case 6:
                                            if (!((reaction === null || reaction === void 0 ? void 0 : reaction.emoji.name) === '🧥')) return [3 /*break*/, 8];
                                            filtered_4 = (function (message) {
                                                return message.author.id === sendsuid;
                                            });
                                            return [4 /*yield*/, channelID.send("Add notes. <@!".concat(sendsuid, ">."))
                                                    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                                                    var karkat, mesCol;
                                                    return __generator(this, function (_a) {
                                                        karkat = '';
                                                        mesCol = channelID.createMessageCollector({ filter: filtered_4, max: 1, time: 60000 });
                                                        mesCol.on('collect', function (m) {
                                                            karkat = m.content;
                                                        });
                                                        mesCol.on('end', function () { return __awaiter(void 0, void 0, void 0, function () {
                                                            var _a, _b, _c;
                                                            return __generator(this, function (_d) {
                                                                switch (_d.label) {
                                                                    case 0: return [4 /*yield*/, reportSchema_1["default"].updateOne({ _id: reportNum }, { $set: { notes: karkat } }, { upsert: true })];
                                                                    case 1:
                                                                        _d.sent();
                                                                        _b = (_a = channelID).send;
                                                                        _c = "Updated accounts with:\n ".concat;
                                                                        return [4 /*yield*/, reportSchema_1["default"].findOne({ _id: reportNum })];
                                                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.apply("Updated accounts with:\n ", [_d.sent()])])];
                                                                    case 3:
                                                                        _d.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 7:
                                            _a.sent();
                                            _a.label = 8;
                                        case 8: return [2 /*return*/];
                                    }
                                });
                            }); })["catch"](function (collected) {
                                message.reply("hey, that's not a reaction i gave you");
                            })];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 19];
                    case 11:
                        if (!(args[1] === 'publish' && repVerify)) return [3 /*break*/, 18];
                        return [4 /*yield*/, channelSchema_1["default"].find({ _id: { $gt: -1 } })];
                    case 12:
                        restula = _b.sent();
                        xoxo = void 0;
                        u = 0;
                        _b.label = 13;
                    case 13:
                        if (!(u < restula.length)) return [3 /*break*/, 16];
                        return [4 /*yield*/, client.channels.cache.get(restula[u].chanID).send({
                                embeds: [reportEmbed]
                            })];
                    case 14:
                        xoxo = _b.sent();
                        if (xoxo.channel.type === "GUILD_NEWS") {
                            xoxo.crosspost()["catch"](console.error);
                        }
                        _b.label = 15;
                    case 15:
                        u++;
                        return [3 /*break*/, 13];
                    case 16: return [4 /*yield*/, channelID.send("Published report ".concat(reportNum, " to all subscribed channels."))];
                    case 17:
                        _b.sent();
                        return [3 /*break*/, 19];
                    case 18:
                        if (args[1] === 'publish' || args[1] == 'edit') {
                            channelID.send("Sorry, you're not permitted to run that command.");
                        }
                        _b.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        channelID.send("Sorry, ".concat(reportNum, " is not a valid report ID."));
                        _b.label = 21;
                    case 21: return [2 /*return*/];
                }
            });
        });
    }
};
// messagecollector
// data to db
// attrib to embed
// send embed to all servers
