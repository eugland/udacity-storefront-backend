"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const auth_1 = __importDefault(require("../middleware/auth"));
const store = new product_1.ProductStore();
const index = async (_req, res) => {
    const products = await store.index();
    res.json(products);
};
const product_routes = (app) => {
    app.get('/products', index);
    app.get('/products/:id', async (req, res) => {
        try {
            const product = await store.show(req.params.id);
            res.json(product);
        }
        catch (err) {
            res.status(400).json(err);
        }
    });
    app.post('/products', auth_1.default, async (req, res) => {
        const product = {
            id: 1,
            name: req.body.name,
            price: req.body.price,
        };
        try {
            const created = await store.create(product);
            res.json(created);
        }
        catch (err) {
            res.json(err);
        }
    });
};
exports.default = product_routes;
