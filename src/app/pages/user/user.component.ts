import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

import {map, startWith} from 'rxjs/operators';


@Component({
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.scss']
})

export class UserComponent {

  // options: Brand[];

  // selectedOption: string;

  // constructor() {
  //   this.options = [
  //     {name: 'Apple', code: 'AAPL', image:'https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png'},
  //     { name: 'Amazon', code: 'AMZN', image: 'https://static.finnhub.io/logo/967bf7b0-80df-11ea-abb4-00000000092a.png' }
  //   ];
  // }
  // ngOnInit() {

  // }




  // control = new FormControl();
  // streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  // filteredStreets: Observable<string[]>;

  // ngOnInit() {
  //   this.filteredStreets = this.control.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value))
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }








    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = false;

    separatorKeysCodes = [ENTER, COMMA];

    stockCtrl = new FormControl();

    filteredStocks: Observable<any[]>;

    stocks = [];

    allstocks = [
      'Apple',
      'Lemon',
      'Lime',
      'Orange',
      'Strawberry'
    ];

    @ViewChild('stocksInput') stocksInput: ElementRef;

    constructor() {
      this.filteredStocks = this.stockCtrl.valueChanges.pipe(
          map((stock: string | null) => stock ? this.filter(stock) : this.allstocks.slice()));
    }

    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;

      // Add our stock
      if ((value || '').trim()) {
        this.stocks.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.stockCtrl.setValue(null);
    }

    remove(stock: any): void {
      const index = this.stocks.indexOf(stock);

      if (index >= 0) {
        this.stocks.splice(index, 1);
      }
    }

    filter(name: string) {
      return this.allstocks.filter(stock =>
          stock.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    selected(event: MatAutocompleteSelectedEvent): void {
      this.stocks.push(event.option.viewValue);
      this.stocksInput.nativeElement.value = '';
      this.stockCtrl.setValue(null);
    }
}
