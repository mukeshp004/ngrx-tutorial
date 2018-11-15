import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from "./reducers/tutorial.reducer";
import { reducers } from "./reducers";

import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { CreateComponent } from './create/create.component'; 
import { counterReducer } from "./reducers/counter.reducer";
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { PizzaModule } from 'src/app/pizza/pizza.module';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent,
    CreateComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer,
      count: counterReducer,
      ...reducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production // Restrict extension to log-only mode
    }),
    AppRoutingModule,
    PizzaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
