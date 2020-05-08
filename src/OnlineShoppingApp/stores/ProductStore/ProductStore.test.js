import {ProductStore} from '.';
import getProductListresponse from '../../fixtures/getOnlineShoppingAppProducts.json';
import ProductApi from "../../services/ProductService/ProductApi";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";

describe("Product store tests",()=>{
    let productStore;
    let productsApi;

    beforeEach(() => {
        productsApi = new ProductApi();
        productStore = new ProductStore(productsApi);
        });

    it("products Api service should be initialised with",()=>{
        expect(productStore.productsAPIService).toBe(productsApi)
    })

    it("should test initilasing product store",()=>{
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
    })

    it("should test fetching state of product store",()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockProductsApi=jest.fn();
        mockProductsApi.mockReturnValue(mockLoadingPromise);

        productsApi.getProductsListsApi=mockProductsApi;

        productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    })

    it("should test success state of product store",async ()=>{
        const mockSuccessPromise=new Promise(function(resolve,reject){
            resolve(getProductListresponse);
        });
        const mockProductsApi=jest.fn();
        mockProductsApi.mockReturnValue(mockSuccessPromise);

        productsApi.getProductsListsApi=mockProductsApi;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
    })

    it("should test failure state of product store",async ()=>{
        const mockFailurePromise=new Promise(function(resolve,reject){
            reject(new Error("error"));
        });
        const mockProductsApi=jest.fn();
        mockProductsApi.mockReturnValue(mockFailurePromise);

        productsApi.getProductsListsApi=mockProductsApi;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
    })

    it("should test whether the sort by condition is receiving correctly",()=>{
        productStore.onChangeSortBy('ASCENDING');

        expect(productStore.sortBy).toBe('ASCENDING');
    })

    it("should test setProductListResponse",()=>{
        const productList=[{productId:1},{productId:2}];
        productStore.setProductListResponse(productList);
        expect(productStore.productList.length).toBe(2);
    })

    it("should test whether the clicked sizes are filtered",()=>{

        productStore.onSelectSize("XS");
        expect(productStore.sizeFilter[0].isClicked).toBeTruthy();

        productStore.onSelectSize("XS");
        expect(productStore.sizeFilter[0].isClicked).toBeFalsy();

        productStore.setProductListResponse(getProductListresponse);
        
        productStore.onSelectSize("XS");
        expect(productStore.filteredProducts.length).toBe(2);

        productStore.onSelectSize("L");
        expect(productStore.filteredProducts.length).toBe(11);

        productStore.onSelectSize("S");
        expect(productStore.filteredProducts.length).toBe(12);
    })

    it("should test ascending and descending order of products list based on price",()=>{
        const productList=[
            {id:1,price:120},
            {id:2,price:100},
            {id:3,price:400}
        ]
        productStore.setProductListResponse(productList);
        productStore.sortBy="ASCENDING";
        console.log("sorted",productStore.productList.map(product=>product.price))
        expect(productStore.filteredProducts).toEqual([{id:2,price:100},{id:1,price:120},{id:3,price:400}])

    })
})