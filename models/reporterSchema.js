"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var reporterSchema = new mongoose.Schema({
    _id: String,
    col: String,
    userId: String
});
var name = 'reporters';
exports["default"] = mongoose.models[name] ||
    mongoose.model(name, reporterSchema, "reporters");
