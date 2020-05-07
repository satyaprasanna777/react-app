import {observable, action,computed} from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import Product from "../models/Product";

class ProductStore{

    @observable productList;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable productsAPIService;
    @observable sizeFilter;
    @observable sortBy;
    @observable filteredProducts;

    constructor(productService){
        this.productList=[];
        this.filteredProducts=[];
        this.getProductListAPIStatus=API_INITIAL;
        this.getProductListAPIError=null;
        this.sizeFilter=[{isClicked:false,size:'XS'},
                        {isClicked:false,size:'S'},
                        {isClicked:false,size:'M'},
                        {isClicked:false,size:'L'},
                        {isClicked:false,size:'XL'},
                        {isClicked:false,size:'XXL'}];
        this.sortBy='SELECT';
        this.productsAPIService=productService;
    }

    @action.bound
    getProductList(){
        const productsPromise=this.productsAPIService.getProductsListsApi();
        return bindPromiseWithOnSuccess(productsPromise)
        .to(this.setGetProductListAPIStatus,this.setProductListResponse)
        .catch(this.setGetProductListAPIError)
    }

    @action.bound
    setProductListResponse(productsList){
            this.productList=productsList.map((eachProduct)=>{
            const newProduct=new Product(eachProduct);
            return newProduct;
        })
        this.filteredProducts=this.productList;
    }

    @action.bound
    setGetProductListAPIError(error){
        this.getProductListAPIError=error;
        console.log("error",error)
    }

    @action.bound
    setGetProductListAPIStatus(apiStatus){
        this.getProductListAPIStatus=apiStatus;
    }

    @action.bound   
    onChangeSortBy(condition){
        this.sortBy=condition;
    }

    @action.bound
    onSelectSize(size){

        this.sizeFilter.filter(eachSize=>{
            if(eachSize.size===size)
            eachSize.isClicked=!eachSize.isClicked
            return eachSize
        })

        let selectedSizes=this.sizeFilter.filter(eachSize=>eachSize.isClicked)
    
        this.filteredProducts=this.productList.filter(eachProduct=>{
        let isPresent=selectedSizes.some(function temp(eachSizeObj,index){
            return eachProduct.availableSizes.indexOf(eachSizeObj.size)!==-1;
        })
        return isPresent;
        })
        //console.log("filtered",this.filteredProducts)
        
    }

    @computed
    get products(){
        if(this.sortBy==='ASCENDING')
        return this.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1)
        else if(this.sortBy==='DESCENDING')
        return this.filteredProducts.sort((a, b) => (a.price < b.price) ? 1 : -1)
        else
        return this.filteredProducts;
    }  

    @computed
    get sortedAndFilteredProducts(){
        if(this.filteredProducts.length!==0)
        return this.products;
        else
        return this.productList;
    }

    @computed
    get totalNoOfProductsDisplayed(){
        if(this.filteredProducts.length!==0)
        return this.products.length;
        else
        return this.productList.length;
    }

}

export default ProductStore;