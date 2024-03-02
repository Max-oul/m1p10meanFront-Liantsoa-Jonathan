import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
    providedIn:'root'
})

export class ProcuctService{
    products: Product[] = [
        {
            product_id:1,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        },
        {
            product_id:2,
            title:"Parfun",
            description:"Un parfum est une odeur ou plus souvent une composition odorante plus ou moins persistante naturellement émise par une plante, un animal, un champignon ou un environnement. Dans la nature, les parfums sont souvent des messages chimiques et biochimiques, et notamment des phéromones ou phytohormones",
            price:20,
            imageUrl:"https://media.gqmagazine.fr/photos/646e2db48e8457689a904144/3:2/w_2247,h_1498,c_limit/parfum_h2.png"
        },
        {
            product_id:3,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        },
        {
            product_id:4,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        },
        {
            product_id:5,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        },
        {
            product_id:6,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        }
    ]

    getAllProduct(){
        return this.products;
    }

    getProductById(id:number){
        const product = this.products.find(product => product.product_id === id);
        if(!product){
            throw new Error('Product not found')
        }else{
            return product;
        }
    }
}

