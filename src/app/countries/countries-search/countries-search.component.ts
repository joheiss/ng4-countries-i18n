import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {SearchCriteria} from '../country';

@Component({
  selector: 'jo-countries-search',
  templateUrl: './countries-search.component.html',
  styleUrls: ['./countries-search.component.css']
})
export class CountriesSearchComponent implements OnInit {

  @Input('searchCriteria') searchCriteria: SearchCriteria;
  @Output('search') search = new EventEmitter<SearchCriteria>();

  search$ = new Subject<SearchCriteria>();

  constructor() {
    this.search$
      .debounceTime(300)
      // .distinctUntilChanged()
      .subscribe(() => this.search.emit(this.searchCriteria));
  }


  ngOnInit(): void {
  }

  onInput(term) {
    this.searchCriteria.term = term.toLocaleLowerCase();
    this.search$.next(this.searchCriteria);
  }
  onToggle(checkbox: HTMLInputElement) {

    this.searchCriteria[checkbox.id] = !this.searchCriteria[checkbox.id];
    this.search$.next(this.searchCriteria);
  }
}
