import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pagination-element';
  currentPage: number = 1;

  onChangeCurrentPage(currentPage: number): void {
    this.currentPage = currentPage;
  }
}
