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
var discord_js = require("discord.js");
var wokcommands = require("wokcommands");
var path_1 = require("path");
var dotenv = require("dotenv");
dotenv.config();
var client = new discord_js.Client({
    intents: [discord_js.Intents.FLAGS.GUILDS, discord_js.Intents.FLAGS.GUILD_MESSAGES, discord_js.Intents.FLAGS.GUILD_BANS, discord_js.Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});
client.on('ready', function () { return __awaiter(void 0, void 0, void 0, function () {
    var wok;
    return __generator(this, function (_a) {
        wok = new wokcommands(client, {
            commandsDir: path_1.join(__dirname, 'commands'),
            typeScript: false,
            testServers: ['888628928581886013', '797902467626827777', '976667155418456126', '942128778816143430', '947463447451410453', '974154875585835008', '932857954561044511', '966009428891553842', '908178429638230036'],
            botOwners: ['545766773048213519', '541696931957571584'],
            mongoUri: process.env.MONGO_URI
        })
            .setDefaultPrefix('FS!');
        console.log('slayeddd');
        return [2 /*return*/];
    });
}); });
client.login(process.env.TOKEN);
