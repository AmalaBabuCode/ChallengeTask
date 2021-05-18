import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchInputValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  emitSearch(searchValue: any) {
    searchValue = searchValue.trim();
    this.searchInputValue.emit(searchValue);
  }

}
