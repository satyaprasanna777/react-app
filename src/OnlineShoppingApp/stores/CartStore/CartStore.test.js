import React from 'react';
import {CartStore} from ".";
import { ProductStore } from "../ProductStore";

describe("cart store tests",()=>{
    let cartStore;
    let productStore;

    beforeEach(()=>{
        productStore=new ProductStore();
        cartStore=new CartStore(productStore);
    })

    it("should test all observable properties initilasation",()=>{
        expect(cartStore.cartProductList).toEqual([])
        expect(cartStore.cartProductObjects).toEqual([])
    })

    it("should test productStore initilation in cart store",()=>{
        console.log("product store",cartStore.productStore)

        expect(cartStore.productStore).toBe(productStore)
    })
})