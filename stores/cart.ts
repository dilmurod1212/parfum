import { defineStore } from 'pinia'
import { products } from "~/data/data";

export const useCartStore = defineStore('basket', {
    state: () => ({
    cartContent: [],
}),
    getters:{
        formattedCart(){
            return this.cartContent.map(productId => {
                const product = this.cartContent[productId];

                return {
                    id: product.productId,
                    image: products.find((p) => p.id === product.productId)?.image,
                    name: products.find((p) => p.id === product.productId)?.name,
                    price: products.find((p) => p.id === product.productId)?.price,
                    star: products.find((p) => p.id === product.productId)?.star,
                    quantity: 1,
              }
            })
        },
        total(){
            let sum = 0
            for(let i = 0; i < this.cartContent?.length; i++){
                console.log(this.cartContent[i]);
                sum += this.cartContent[i]?.price
            }
            return sum  
        },
        productsTotal(){
            return this.cartContent?.length
        }
    },  
    actions: {
        add(product){
            console.log('product: ',product);
            const singleProduct = this.cartContent.find(el => el.id === product.id)     
            
            if(singleProduct){
                singleProduct.quantity = singleProduct.quantity ? Number(singleProduct.quantity) + 1 : 1 
            } else {
                product.quantity = product.quantity ? product.quantity + 1 : 1 
                this.cartContent.push(product)
            }
            
            this.saveToLocalStorage();
            console.log('this.cartContent: ', this.cartContent);
            
        },
        remove(productId){
            this.cartContent = this.cartContent.filter(element => element.id !== productId)
            this.saveToLocalStorage();
        },
        removeProduct(productId){   
           console.log('remove ekan', this.cartContent);   
           this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('cartContent', JSON.stringify(this.cartContent));
        },
        loadFromLocalStorage() {
            const storedCart = localStorage.getItem('cartContent');
            if (storedCart) {
              this.cartContent = JSON.parse(storedCart);
            }
        },
        onInit() {
            this.loadFromLocalStorage();
        },
    },
    
})