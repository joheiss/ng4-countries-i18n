import {Component, OnInit} from '@angular/core';
import {Country} from '../country';
import {ActivatedRoute, Router} from '@angular/router';
import {CountriesService} from '../countries.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Location} from '@angular/common';

@Component({
  selector: 'jo-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  language;
  country: Country;
  translations: { language: string, name: string }[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private service: CountriesService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.country = this.service.getCountryByCode(params.get('id'));
        this.translations = this.mapTranslationsToArray(this.country.translations);
      });
    this.language = 'en'; // navigator.language;
  }

  onBack() {
    this.location.back();
  }

  onNavigateToCountry(code) {

    this.router.navigate(['countries', code]);
  }

  private mapTranslationsToArray(translations: { [key: string]: string }) {
    const array: any[] = [];
    for (let key in translations) {
      if (translations.hasOwnProperty(key)) {
        array.push({language: key, name: translations[key]});
      }
    }
    return array;
  }
}
