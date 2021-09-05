"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const index = (table) => {
    return async function () {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM ${table}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not get ${table}. Error: ${err}`);
        }
    };
};
const show = (table) => {
    return async function (id) {
        try {
            const sql = `SELECT * FROM ${table} WHERE id=($1)`;
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find id ${id}. Error: ${err}`);
        }
    };
};
const destroy = (table) => {
    return async function (id) {
        try {
            const sql = `DELETE FROM ${table} WHERE id=($1)`;
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Failed to delete. Error: ${err}`);
        }
    };
};
const update = (table) => {
    return async function (id, columns, values) {
        let statement = '';
        let i = 1;
        for (const column of columns) {
            if (i > 1) {
                statement += ',';
            }
            statement += `${column} = $${i}`;
            i += 1;
        }
        const sql = `UPDATE ${table} SET ${statement} WHERE id = ${id}`;
        try {
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Failed to update. Error: ${err}`);
        }
    };
};
const crud = { index, show, update, destroy };
exports.default = crud;
