import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeEnIN from '@angular/common/locales/en-IN';
import { TOAST_CONFIG, ToastrService } from 'ngx-toastr';

registerLocaleData(localeEnIN, 'en-IN');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    ToastrService,
    {
      provide: TOAST_CONFIG,
      useValue: {
        position: 'top-right',
        duration: 3000,
      },
    },
      { provide: LOCALE_ID, useValue: 'en-IN' },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
