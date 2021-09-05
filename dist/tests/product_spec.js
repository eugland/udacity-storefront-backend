"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const store = new product_1.ProductStore();
describe('Product Model', () => {
    it('create method should add a record', async () => {
        const result = await store.create({
            id: 1,
            name: 'item1',
            price: 1000,
        });
        expect(result).toEqual({
            id: 1,
            name: 'item1',
            price: 1000,
        });
    });
    it('index method should return a list', async () => {
        const result = await store.index();
        expect(result).toEqual([
            {
                id: 1,
                name: 'item1',
                price: 1000,
            },
        ]);
    });
    it('show method should return the correct model', async () => {
        const result = await store.show('1');
        expect(result).toEqual({
            id: 1,
            name: 'item1',
            price: 1000,
        });
    });
});
