import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { salonService } from '../models/salon_service';
import { AppointementSchedulingService } from '../services/appointement-scheduling.service';
import { FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
 
@Component({
  selector: 'app-appointment-scheduling',
  standalone: true,
  imports: [CommonModule,FormsModule,MatCardModule],
  templateUrl: './appointment-scheduling.component.html',
  styleUrl: './appointment-scheduling.component.scss'
})

export class AppointmentSchedulingComponent implements OnInit{

  salonServices!: salonService[];
  searchTerm!: string 
  
  filteredSalonServices!: salonService[] 

  constructor(private appointementSchedulingService:AppointementSchedulingService){}

  ngOnInit(): void {
    this.salonServices = this.appointementSchedulingService.getSalonServices();
    this.filteredSalonServices = this.salonServices;
    this.searchTerm = ''; 
  }


  addToCart(service: salonService) {
    // Implement your logic for adding to cart
    console.log('Added to cart:', service);
  }

  orderNow(service: salonService) {
    // Implement your logic for ordering now
    console.log('Ordered now:', service);
  }

  // Filter services based on search term
  filterServices() {
    this.filteredSalonServices = this.salonServices.filter(service =>
      service.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
