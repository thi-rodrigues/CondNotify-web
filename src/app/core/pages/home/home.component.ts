import { Component, OnInit } from '@angular/core';
import { CardOrdersComponent } from "../../../shared/cards/card-orders/card-orders.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardOrdersComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log('HomeComponent');

  }

}
