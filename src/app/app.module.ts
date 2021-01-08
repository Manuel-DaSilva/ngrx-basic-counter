import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';

import { PrimeModule } from './prime.module';

import { GrandchildComponent } from './counter/grandchild/grandchild.component';
import { ChildComponent } from './counter/child/child.component';
import { AppComponent } from './app.component';

// ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter/counter.reducer';

@NgModule({
  declarations: [AppComponent, ChildComponent, GrandchildComponent],
  imports: [
    BrowserModule,
    PrimeModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
