"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var dbSchema = new mongoose_1["default"].Schema({
    _id: String,
    userID: String,
    reportedBy: String
});
var name = 'scammerBans';
exports["default"] = mongoose_1["default"].models[name] ||
    mongoose_1["default"].model(name, dbSchema, 'realBanDatabase');
