import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';

@NgModule({
  declarations: [AppComponent, TablePaginationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
