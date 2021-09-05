"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const auth_1 = __importDefault(require("../middleware/auth"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const store = new user_1.UserStore();
const index = async (_req, res) => {
    const users = await store.index();
    res.json(users);
};
const user_routes = (app) => {
    app.get('/users', auth_1.default, index);
    app.get('/users/:id', auth_1.default, async (req, res) => {
        try {
            const user = await store.show(req.params.id);
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    });
    app.post('/users', async (req, res) => {
        const user = {
            id: 1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
        };
        try {
            const created = await store.create(user);
            const token = jsonwebtoken_1.default.sign({ user: created }, 
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            process.env.TOKEN_SECRET);
            console.log(token);
            res.json(token);
            // res.json(created);
        }
        catch (err) {
            res.json(err);
        }
    });
    app.put('/users', auth_1.default, async (req, res) => {
        const columns = JSON.parse(req.body.columns);
        const values = JSON.parse(req.body.values);
        try {
            const updated = await store.update(req.body.id, columns, values);
            res.json(updated);
        }
        catch (err) {
            res.json(err);
        }
    });
    app.delete('/users', async (req, res) => {
        try {
            const user = await store.destroy(req.body.id);
            res.json(user);
        }
        catch (err) {
            res.json(err);
        }
    });
};
exports.default = user_routes;
