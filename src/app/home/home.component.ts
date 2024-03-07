import { Component , OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProcuctService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonModule, NgFor } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule,ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  constructor(private productService:ProcuctService,
              private router: Router){}

  products!: Product[];
  
  ngOnInit(): void {
    this.products = this.productService.getAllProduct();
  }

  onAppointementScheduling(){
    this.router.navigateByUrl('/appointment_scheduling/')
  }
}
