import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponentsModule } from './components';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './components/root';
import { AppRoutingModule } from './routes';
import { StoreModule } from '@ngrx/store';
import { DataEffects } from './components/main-page/store';
import { dataReducer } from './components/main-page/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ dataReducer }),
    EffectsModule.forRoot([DataEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
