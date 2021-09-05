"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const common_1 = __importDefault(require("../crud/common"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserStore {
    constructor() {
        const table = 'users';
        this.index = common_1.default.index(table);
        this.show = common_1.default.show(table);
        this.destroy = common_1.default.destroy(table);
        this.update = common_1.default.update(table);
    }
    async create(u) {
        const hash = await bcrypt_1.default.hash(u.password, Number(process.env.SALT_ROUND));
        try {
            const sql = 'INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [
                u.firstname,
                u.lastname,
                hash,
            ]);
            const row = result.rows[0];
            conn.release();
            return row;
        }
        catch (err) {
            throw new Error(`Could not add a new row. Error: ${err}`);
        }
    }
}
exports.UserStore = UserStore;
