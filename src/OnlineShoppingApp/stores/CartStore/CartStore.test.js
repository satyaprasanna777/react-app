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
        expect(cartStore.productStore).toBe(productStore)
    })

    it("should test whether items are adding to cart on clicking add to cart",()=>{
        cartStore.onClickAddToCart([{productId:1}]);

        expect(cartStore.cartProductList.length).toBe(1);
    })

    it("should test length of the product list in cart store when same products are added",()=>{
        cartStore.onClickAddToCart([{productId:1},{productId:1}]);

        expect(cartStore.cartProductList.length).toBe(1);
    })

    it("should test whether the items are removed from the cart on click remove cart item",()=>{
        cartStore.onClickAddToCart([{productId:1},{productId:2}]);
        cartStore.onRemoveCartItem(1);

        expect(cartStore.cartProductList.length).toBe(1);
    })
})