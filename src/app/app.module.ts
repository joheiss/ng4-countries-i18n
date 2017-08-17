import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {CountriesModule} from './countries/countries.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {CountriesService} from './countries/countries.service';
import { ErrorComponent } from './error/error.component';

export function startupServiceFactory(startupService: CountriesService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountriesModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    },
    CountriesService,
    // provide app initializer
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [CountriesService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
