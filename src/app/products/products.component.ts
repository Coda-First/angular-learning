import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      name: 'MacBook',
      price: 1550,
      description: 'je suis un ordinateur',
    },
    {
      name: 'MacBook',
      price: 1550,
      description: 'je suis un ordinateur',
    },
    {
      name: 'MacBook',
      price: 1550,
      description: 'je suis un ordinateur',
    },
    {
      name: 'MacBook',
      price: 1550,
      description: 'je suis un ordinateur',
    },
    {
      name: 'MacBook',
      price: 1550,
      description: 'je suis un ordinateur',
    },
  ];
}
