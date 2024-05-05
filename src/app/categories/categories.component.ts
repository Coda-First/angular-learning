import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  public count: number = 0;
  constructor() { }

  public increment() {
    this.count += 1;
  }

  public decrement() {
    this.count -= 1;
  }

  ngOnInit(): void { }
}
