"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const auth_1 = __importDefault(require("../middleware/auth"));
const store = new order_1.OrderStore();
const index = async (_req, res) => {
    const orders = await store.index();
    res.json(orders);
};
const order_routes = (app) => {
    app.get('/orders', index);
    app.get('/orders/:id', async (req, res) => {
        try {
            const order = await store.show(req.params.id);
            res.json(order);
        }
        catch (err) {
            res.status(400).json(err);
        }
    });
    app.post('/orders/:user_id', async (req, res) => {
        try {
            const created = await store.create(Number(req.params.user_id));
            res.json(created);
        }
        catch (err) {
            res.json(err);
        }
    });
    app.post('/orders/:id/add', async (req, res) => {
        try {
            const order = await store.addProduct(req.body.number, Number(req.params.id), req.body.product_id);
            res.json(order);
        }
        catch (err) {
            res.status(400).json(err);
        }
    });
    app.get('/orders/:user_id', auth_1.default, async (req, res) => {
        try {
            const orders = await store.ordersByUser(Number(req.params.user_id));
            res.json(orders);
        }
        catch (err) {
            res.json(err);
        }
    });
};
exports.default = order_routes;
