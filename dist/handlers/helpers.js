"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.checkAuthHeader = exports.getTokenByUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SECRET = process.env.TOKEN_SECRET;
function getTokenByUser(user) {
    return jsonwebtoken_1["default"].sign({ user: user }, SECRET);
}
exports.getTokenByUser = getTokenByUser;
function checkAuthHeader(req, res, next) {
    if (!req.headers.authorization) {
        res.status(401);
        res.json("Access denied, invalid token");
        return false;
    }
    try {
        var token = req.headers.authorization.split(" ")[1];
        jsonwebtoken_1["default"].verify(token, SECRET);
        next();
    }
    catch (err) {
        console.error(err);
        res.status(401);
        res.json("Access denied, invalid token");
        return false;
    }
}
exports.checkAuthHeader = checkAuthHeader;
