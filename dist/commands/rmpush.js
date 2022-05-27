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
var dbSchema_1 = require("../models/dbSchema");
var reportSchema_1 = require("../models/reportSchema");
var reporterSchema_1 = require("../models/reporterSchema");
module.exports = {
    category: 'DB',
    description: 'Assigns UID to report.',
    slash: false,
    testOnly: false,
    minArgs: 2,
    expectedArgs: '<report> <uids -->',
    callback: function (_a) {
        var message = _a.message, args = _a.args;
        return __awaiter(void 0, void 0, void 0, function () {
            var channelID, userUID, uidList, rNum, dbNum, result, accs, sum, evid, col, pub, notes, dbNum2, argsArchive, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        channelID = message.channel;
                        userUID = message.author.id;
                        uidList = [];
                        rNum = args[0];
                        return [4 /*yield*/, reportSchema_1["default"].countDocuments()];
                    case 1:
                        dbNum = _b.sent();
                        return [4 /*yield*/, reporterSchema_1["default"].countDocuments({ userId: userUID })];
                    case 2:
                        if (!((_b.sent()) > 0)) return [3 /*break*/, 13];
                        return [4 /*yield*/, reportSchema_1["default"].countDocuments({ _id: rNum })];
                    case 3:
                        if (!((_b.sent()) === 1)) return [3 /*break*/, 11];
                        return [4 /*yield*/, reportSchema_1["default"].findOne({ _id: rNum })];
                    case 4:
                        result = _b.sent();
                        accs = result.accounts;
                        sum = result.summary;
                        evid = result.evidence;
                        col = result.colour;
                        pub = result.public;
                        notes = result.notes;
                        dbNum2 = void 0;
                        argsArchive = [];
                        i = 1;
                        _b.label = 5;
                    case 5:
                        if (!(i < args.length)) return [3 /*break*/, 10];
                        return [4 /*yield*/, reportSchema_1["default"].updateOne({ _id: rNum }, { $push: { userIden: args[i] } }, { upsert: true })];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, dbSchema_1["default"].countDocuments()];
                    case 7:
                        dbNum2 = _b.sent();
                        return [4 /*yield*/, new dbSchema_1["default"]({
                                _id: "".concat(dbNum2 + 2),
                                userID: args[i],
                                reportedBy: userUID
                            }).save()];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 5];
                    case 10:
                        channelID.send("Update report ".concat(rNum));
                        return [3 /*break*/, 12];
                    case 11: return [2 /*return*/, "Sorry, report ".concat(rNum, " doesn't seem to exist.")];
                    case 12: return [3 /*break*/, 14];
                    case 13: return [2 /*return*/, "Sorry, you don't seem to have the permissions to run this command."];
                    case 14: return [2 /*return*/];
                }
            });
        });
    }
};
