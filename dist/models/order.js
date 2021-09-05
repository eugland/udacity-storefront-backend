"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
const common_1 = __importDefault(require("../crud/common"));
class OrderStore {
    constructor() {
        const table = 'orders';
        this.index = common_1.default.index(table);
        this.show = common_1.default.show(table);
    }
    async create(user_id) {
        try {
            const sql = 'INSERT INTO orders (user_id) VALUES($1) RETURNING *';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [user_id]);
            const row = result.rows[0];
            conn.release();
            return row;
        }
        catch (err) {
            throw new Error(`Could not add a new row. Error: ${err}`);
        }
    }
    async addProduct(quantity, order_id, product_id) {
        try {
            const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [
                quantity,
                order_id,
                product_id,
            ]);
            const row = result.rows[0];
            conn.release();
            return row;
        }
        catch (err) {
            throw new Error(`Could not add product ${product_id} to order ${order_id}: ${err}`);
        }
    }
    async ordersByUser(user_id) {
        try {
            const conn = await database_1.default.connect();
            const sql = 'SELECT orders.id FROM users JOIN orders ON users.id = orders.user_id WHERE users.id = ($1)';
            const result = await conn.query(sql, [user_id]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable get users with orders: ${err}`);
        }
    }
}
exports.OrderStore = OrderStore;
