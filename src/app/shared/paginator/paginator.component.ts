import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'paginator-component',
  standalone: true,
  imports: [MatIcon, CommonModule, MatIconModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent implements OnInit {
  @Input() pages: number = 1;
  @Input() date: string = '';
  @Input() currentPage: number = 1;
  @Output() page = new EventEmitter<number>();

  currentPages: number[] = [1];
  language: string = 'pt';

  constructor() {}

  ngOnInit(): void {
  }

  eventPage(page: number) {
    this.page.emit(page);
  }

  goToLastPage() {
    this.handlePaginator(this.pages);
  }

  goToFirstPage() {
    this.handlePaginator(1);
  }

  goToNextPage() {
    this.handlePaginator(this.currentPage + 1);
  }

  goToPreviousPage() {
    this.handlePaginator(this.currentPage - 1);
  }

  getPages(): number[] {
    if (this.pages === 0) {
      return [1];
    }
    if (this.pages < 10) {
      return Array.from({ length: this.pages }, (v, k) => k + 1);
    }
    if (this.currentPage <= 5) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    if (this.currentPage >= this.pages - 5) {
      return Array.from({ length: 10 }, (v, k) => this.pages - k).reverse();
    }

    const pages: any[] = [];

    for (var i = this.currentPage - 4; i < this.currentPage; i++) {
      pages.push(i);
    }
    pages.push(this.currentPage);
    for (var i = this.currentPage + 1; i <= this.currentPage + 5; i++) {
      pages.push(i);
    }

    return pages;
  }

  handlePaginator(page: number) {
    this.eventPage(page);
    this.currentPage  = page;
  }
}
