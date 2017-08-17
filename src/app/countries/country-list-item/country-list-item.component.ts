import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../country';

@Component({
  selector: 'jo-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.css']
})
export class CountryListItemComponent {

    @Input('country') country: Country;
}
