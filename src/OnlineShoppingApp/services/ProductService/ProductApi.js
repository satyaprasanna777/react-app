import { create } from "apisauce";
import { baseURL } from "../../constants/constants";
import { apiMethods } from "../../../constants/APIConstants";
import { networkCallWithApisauce } from "../../../utils/APIUtils";
import endPoints from "../endPoints";


const productsListUrl=baseURL;

class ProductApi{  
    api
    constructor() {
        this.api = create({
            baseURL: productsListUrl   
        })
    }
    getProductsListsApi(offSetValue) {
        return networkCallWithApisauce(
            this.api,
            endPoints(offSetValue),
            {},
            apiMethods.get)
    }
}


export default ProductApi;