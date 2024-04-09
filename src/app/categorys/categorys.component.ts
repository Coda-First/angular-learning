import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.css',
})
export class CategorysComponent implements OnInit {
  public count: number = 0;
  constructor() {}

  public increment() {
    this.count += 1;
  }

  public decrement() {
    this.count -= 1;
  }

  ngOnInit(): void {}
}
