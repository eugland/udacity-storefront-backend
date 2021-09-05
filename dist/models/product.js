"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStore = void 0;
const database_1 = __importDefault(require("../database"));
const common_1 = __importDefault(require("../crud/common"));
class ProductStore {
    constructor() {
        const table = 'products';
        this.index = common_1.default.index(table);
        this.show = common_1.default.show(table);
    }
    async create(m) {
        try {
            const sql = 'INSERT INTO products ( name, price) VALUES($1, $2) RETURNING *';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [m.name, m.price]);
            const row = result.rows[0];
            conn.release();
            return row;
        }
        catch (err) {
            throw new Error(`Could not add a new row. Error: ${err}`);
        }
    }
}
exports.ProductStore = ProductStore;
