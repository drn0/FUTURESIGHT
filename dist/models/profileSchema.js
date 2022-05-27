"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var reqString = {
    type: String,
    required: true
};
var reqInt = {
    type: Number,
    required: true
};
var profileSchema = new mongoose_1.Schema({
    _id: reqString,
    userId: reqString,
    username: reqString,
    vouches: reqString,
    colour: reqString,
    image: reqString,
    type: reqString
});
var name = 'staffinfo';
exports["default"] = mongoose_1["default"].models[name] ||
    mongoose_1["default"].model(name, profileSchema, name);
