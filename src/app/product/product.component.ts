import { Component , Input ,OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  constructor(private router: Router){}

  @Input() product!: Product

  ngOnInit(): void {
  }

  onViewProduct(){
    this.router.navigateByUrl(`/product-view/${this.product.product_id}`)
  }
}
