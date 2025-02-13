import { Component } from '@angular/core';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.sass']
})
export class ProductMainComponent {

  products = [
    { id:1, price:'£24.00 GBP', title:'basic tree', image: 'assets/media/img/product/photo_2025-01-09_16-16-05.jpg'},
    { id:2, price:'£24.00 GBP', title:'basic tree', image: 'assets/media/img/product/photo_2025-01-09_16-16-07.jpg'},
    { id:3, price:'£24.00 GBP', title:'basic tree', image: 'assets/media/img/product/photo_2025-01-09_16-16-10.jpg'},
    { id:4, price:'£24.00 GBP',title:'basic tree', image:'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
  ]

}
