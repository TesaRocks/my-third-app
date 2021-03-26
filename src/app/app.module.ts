import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './shopping/store/shopping.reducer';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ shopping: shoppingReducer }),
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
