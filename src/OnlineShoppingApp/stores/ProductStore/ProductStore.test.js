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

    it("should test whether isClicked is changing when on click action performed on sizes",()=>{

        productStore.onSelectSize("XS");
        expect(productStore.sizeFilter[0].isClicked).toBeTruthy();

        productStore.onSelectSize("XS");
        expect(productStore.sizeFilter[0].isClicked).toBeFalsy();
    })

    it("should test filtered products list",()=>{
        productStore.productList=[
            {id:1,availableSizes:['S','XS'],price:120},
            {id:2,availableSizes:['M','L'],price:100},
            {id:3,availableSizes:['XL','XS','S'],price:400}
        ]

        productStore.filteredProducts=[];
        expect(productStore.sortedAndFilteredProducts).toEqual(productStore.productList);
        
        productStore.filteredProducts=productStore.productList;

        const ascendingProducts=[
            {id:2,availableSizes:['M','L'],price:100},
            {id:1,availableSizes:['S','XS'],price:120},
            {id:3,availableSizes:['XL','XS','S'],price:400}
        ]

        const descendingProducts=[
            {id:3,availableSizes:['XL','XS','S'],price:400},
            {id:1,availableSizes:['S','XS'],price:120},
            {id:2,availableSizes:['M','L'],price:100}
        ]

        productStore.sortBy="ASCENDING";
        expect(productStore.sortedAndFilteredProducts).toEqual(ascendingProducts)

        productStore.sortBy="DESCENDING";
        expect(productStore.sortedAndFilteredProducts).toEqual(descendingProducts)

        const descendingFilteredProducts=[
            {id:3,availableSizes:['XL','XS','S'],price:400},
            {id:1,availableSizes:['S','XS'],price:120}
        ]

        productStore.onSelectSize("XS");
        expect(productStore.sortedAndFilteredProducts).toEqual(descendingFilteredProducts)
    })

    it("should test totla number of products in the product list initially",()=>{
        productStore.setProductListResponse(getProductListresponse);
        expect(productStore.totalNoOfProductsDisplayed).toBe(getProductListresponse.length)
    })

    it("should test total number of products after selecting size filters",()=>{
        productStore.setProductListResponse(getProductListresponse);
        productStore.onSelectSize("XS");
        expect(productStore.totalNoOfProductsDisplayed).toBe(2)
        expect(productStore.totalNoOfProductsDisplayed).not.toBe(0)

        productStore.onSelectSize("XS");
        expect(productStore.totalNoOfProductsDisplayed).toBe(getProductListresponse.length)

        productStore.onSelectSize("XS");
        productStore.onSelectSize("S");
        expect(productStore.totalNoOfProductsDisplayed).toBe(5)
    })
})