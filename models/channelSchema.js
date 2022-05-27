"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var channelSchema = new mongoose_1["default"].Schema({
    _id: String,
    chanID: String,
    guildID: String
});
var name = 'scamBans';
exports["default"] = mongoose_1["default"].models[name] ||
    mongoose_1["default"].model(name, channelSchema, 'reportChannel');
