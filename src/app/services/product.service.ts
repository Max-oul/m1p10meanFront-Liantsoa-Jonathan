import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
    providedIn:'root'
})

export class ProcuctService{
    products: Product[] = [
        {
            id:1,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        },
        {
            id:2,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        },
        {
            id:3,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        },
        {
            id:4,
            title:"Parfun",
            description:"Jolie parfun",
            price:20,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxlzx1ku0q4kRk1N_js6Gz2Le0fbiu41waAMSeO5ehw&s"
        }
    ]

    getAllProduct(){
        return this.products;
    }
}

