import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit {
  ngOnInit(): void {
    console.log('OrderDetailsComponent');

  }

}
