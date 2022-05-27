"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var reqString = {
    type: String,
    required: true
};
var reqArray = {
    type: Array,
    required: true
};
var reportSchema = new mongoose_1.Schema({
    _id: reqString,
    userIden: Array,
    accounts: Array,
    summary: String,
    evidence: String,
    colour: String,
    public: Boolean,
    notes: String
});
var name = 'reports';
exports["default"] = mongoose_1["default"].models[name] ||
    mongoose_1["default"].model(name, reportSchema, 'reports');
