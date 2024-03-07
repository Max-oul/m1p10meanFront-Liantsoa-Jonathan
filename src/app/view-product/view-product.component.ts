import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProcuctService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,CommonModule,MatIconModule, MatDividerModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent implements OnInit{

  constructor(private productSercvice: ProcuctService,
              private route: ActivatedRoute,
              private router: Router){}
  
  product!:Product;

  ngOnInit(): void {
      const productId = +this.route.snapshot.params['id'];
      this.product = this.productSercvice.getProductById(productId);
  }

  onBack(){
    this.router.navigateByUrl('/')
  }
}
