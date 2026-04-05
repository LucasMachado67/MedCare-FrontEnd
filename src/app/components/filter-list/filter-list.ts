import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel} from '@angular/forms';

@Component({
  selector: 'app-filter-list',
  imports: [FormsModule],
  templateUrl: './filter-list.html',
  styleUrl: './filter-list.scss',
})
export class FilterList {
  @Output() filter = new EventEmitter<{term: string, type: string}>();  
  search: string = "";
  filterType: string = "";

  getCurrentSearch(){
    this.filter.emit({
      term: this.search,
      type: this.filterType
    });
  }
}
