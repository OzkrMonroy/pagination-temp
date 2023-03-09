import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
})
export class TablePaginationComponent implements OnInit {
  @Input() totalPages: number = 10;
  @Output() onChangeCurrentPage: EventEmitter<number> =
    new EventEmitter<number>();
  pages: Array<number> = [];
  currentPage = 1;

  ngOnInit(): void {
    this.generatePageArray();
  }

  generatePageArray(currentPage: number = 1, maxVisible: number = 5) {
    const half = Math.floor(maxVisible / 2);
    let to = maxVisible;

    if (currentPage + half >= this.totalPages) {
      to = this.totalPages;
    } else if (currentPage > half) {
      to = currentPage + half;
    }

    let from = Math.max(to - maxVisible, 0);

    this.pages = Array.from(
      { length: Math.min(this.totalPages, maxVisible) },
      (_, i) => i + 1 + from
    );
  }

  prevAndNextUpdate(page: number): void {
    this.currentPage += page;
    this.generatePageArray(this.currentPage);
    this.dispatchEmitter();
  }
  updateCurrentPage(page: number): void {
    if (page === this.currentPage) return;
    this.currentPage = page;
    this.generatePageArray(this.currentPage);
    this.dispatchEmitter();
  }

  dispatchEmitter(): void {
    this.onChangeCurrentPage.emit(this.currentPage);
  }
}
