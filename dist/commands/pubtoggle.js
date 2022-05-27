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
var reportSchema_1 = require("../models/reportSchema");
var reporterSchema_1 = require("../models/reporterSchema");
module.exports = {
    category: 'Scammer DB',
    description: 'Toggles publishing status on DB report.',
    slash: false,
    testOnly: true,
    minArgs: 1,
    expectedArgs: '<report>',
    callback: function (_a) {
        var message = _a.message, args = _a.args;
        return __awaiter(void 0, void 0, void 0, function () {
            var report, channelID, senderuid, repVerify, accVerify, callreport;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        report = args[0];
                        channelID = message.channel;
                        senderuid = message.author.id;
                        return [4 /*yield*/, reporterSchema_1["default"].countDocuments({ userId: senderuid })];
                    case 1:
                        repVerify = (_b.sent()) > 0;
                        return [4 /*yield*/, reportSchema_1["default"].countDocuments({ _id: report })];
                    case 2:
                        accVerify = (_b.sent()) > 0;
                        if (!(repVerify && accVerify)) return [3 /*break*/, 5];
                        return [4 /*yield*/, reportSchema_1["default"].findOne({ _id: report })];
                    case 3:
                        callreport = _b.sent();
                        return [4 /*yield*/, reportSchema_1["default"].updateOne({ _id: report }, { $set: { public: !callreport.public } })];
                    case 4:
                        _b.sent();
                        channelID.send("Updated report ".concat(report, " to have public status: ").concat(!callreport.public));
                        return [3 /*break*/, 6];
                    case 5:
                        channelID.send("Sorry, it appears that you either don't have permissions to modify reports or that this report does not exist.");
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
};
