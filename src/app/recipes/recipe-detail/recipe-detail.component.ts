import { Component, OnInit } from '@angular/core';

// interface Manage {
//   value: string;
// }
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // manage: Manage[] = [
  //   { value: 'To Shopping List' },
  //   { value: 'Edit Recipe' },
  //   { value: 'Delete Recipe' },
  // ];
  // selected = this.manage[0].value;
  constructor() {}

  ngOnInit(): void {}
}
