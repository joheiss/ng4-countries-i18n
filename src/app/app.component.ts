import {Component, OnInit, OnDestroy, LOCALE_ID, Inject} from '@angular/core';
import {CountriesService} from './countries/countries.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'jo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private service: CountriesService) {
  }

  ngOnInit(): void {

    if (!this.service.countries) {
      this.router.navigate(['error'], {replaceUrl: true});
    }
    console.log('Locale: ', this.service.locale);
  }

  ngOnDestroy(): void {
    this.service.cleanup();
  }
}
