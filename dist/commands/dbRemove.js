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
module.exports = {
    category: 'Scammer DB',
    description: 'Adds a user or users to scammer DB',
    slash: false,
    testOnly: true,
    ownerOnly: true,
    minArgs: 2,
    expectedArgs: '<type> [uids]',
    callback: function (_a) {
        var message = _a.message, args = _a.args;
        return __awaiter(void 0, void 0, void 0, function () {
            var type, bans, addNum, bans_1, setS, counted, i, dbNum;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        type = (args[0]);
                        bans = [];
                        addNum = 0;
                        if (args[0] === 'mass') {
                            //    typeof args;
                            console.log(args);
                            addNum = (args.length - 1); // might have to add -1
                        }
                        else if (args[0] === 'single') {
                            bans_1 = Array.from(args[1]);
                            addNum = 2;
                        }
                        else {
                            message.reply("It seems you haven't specified a method. Please use 'mass' for massadds, and 'single' for one addition.");
                            return [2 /*return*/, ('Fail')];
                        }
                        setS = 0;
                        counted = 0;
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < (addNum - 1))) return [3 /*break*/, 7];
                        return [4 /*yield*/, dbSchema_1["default"].countDocuments()];
                    case 2:
                        dbNum = _b.sent();
                        return [4 /*yield*/, dbSchema_1["default"].find({ 'userID': (args[i + 1]) }).count()];
                    case 3:
                        if (!((_b.sent()) === 0)) return [3 /*break*/, 4];
                        counted += 1;
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, dbSchema_1["default"].updateOne({
                            userID: args[i + 1]
                        }, { $set: { userID: '954559620561666058' } })["catch"](Error)];
                    case 5:
                        _b.sent();
                        setS += 1;
                        _b.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7: return [4 /*yield*/, message.reply("Successfully removed ".concat(setS, " users from the database with ").concat(counted, " that was not in."))];
                    case 8:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
};
