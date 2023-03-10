import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pagination-element';
  currentPage: number = 1;

  form: FormGroup = this.formBuilder.group({
    'initial-date': [''],
    'final-date': [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  onChangeCurrentPage(currentPage: number): void {
    this.currentPage = currentPage;
  }
}
