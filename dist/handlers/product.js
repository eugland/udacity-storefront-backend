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
var product_1 = require("../models/product");
var helpers_1 = require("./helpers");
var ProductStoreInstance = new product_1.ProductStore();
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ProductStoreInstance.index()];
            case 1:
                products = _a.sent();
                res.json(products);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(400);
                res.json(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name_1, price, product, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name_1 = req.body.name;
                price = req.body.price;
                if (name_1 === undefined || price === undefined) {
                    res.status(400);
                    res.send("Some required parameters are missing! eg. :name, :price");
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, ProductStoreInstance.create({ name: name_1, price: price })];
            case 1:
                product = _a.sent();
                res.json(product);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(400);
                res.json(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var read = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                if (id === undefined) {
                    res.status(400);
                    res.send("Missing required parameter :id.");
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, ProductStoreInstance.read(id)];
            case 1:
                product = _a.sent();
                res.json(product);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(400);
                res.json(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, name_2, price, product, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                name_2 = req.body.name;
                price = req.body.price;
                if (name_2 === undefined || price === undefined || id === undefined) {
                    res.status(400);
                    res.send("Some required parameters are missing! eg. :name, :price, :id");
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, ProductStoreInstance.update(id, { name: name_2, price: price })];
            case 1:
                product = _a.sent();
                res.json(product);
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(400);
                res.json(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                if (id === undefined) {
                    res.status(400);
                    res.send("Missing required parameter :id.");
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, ProductStoreInstance.deleteProduct(id)];
            case 1:
                _a.sent();
                res.send("Product with id " + id + " successfully deleted.");
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(400);
                res.json(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function productRoutes(app) {
    app.get("/products", index);
    app.post("/products/create", helpers_1.checkAuthHeader, create);
    app.get("/products/:id", read);
    app.put("/products/:id", helpers_1.checkAuthHeader, update);
    app["delete"]("/products/:id", helpers_1.checkAuthHeader, deleteProduct);
}
exports["default"] = productRoutes;
