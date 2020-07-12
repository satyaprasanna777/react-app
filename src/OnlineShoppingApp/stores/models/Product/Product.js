import { observable } from 'mobx'

class Product {
   @observable productId
   @observable availableSizes
   @observable currencyFormat
   @observable currencyId
   @observable description
   @observable installmentsCount
   @observable isFreeShipping
   @observable price
   @observable printStyle
   @observable title
   @observable imageURL

   constructor(productObj) {
      this.productId = productObj.id
      this.availableSizes = productObj.availableSizes
      this.currencyFormat = productObj.currencyFormat
      this.currencyId = productObj.currencyId
      this.description = productObj.description
      this.installmentsCount = productObj.installments
      this.isFreeShipping = productObj.isFreeShipping
      this.price = productObj.price
      this.printStyle = productObj.style
      this.title = productObj.title
      this.imageURL = productObj.image
   }
}

export default Product
