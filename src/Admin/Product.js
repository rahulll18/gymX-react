export class Product{

    constructor(
        productheading = "",
        productDescription = "", 
        productPrice = "",
        productStrike = "",
        productOffer = "",
        // ProductImage = "",
    ){
        this.productheading=productheading;
        this.productDescription=productDescription;
        this.productPrice=productPrice;
        this.productStrike=productStrike;
        this.productOffer=productOffer
        // this.ProductImage= ProductImage;
    }
}