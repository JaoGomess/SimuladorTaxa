import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';
import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './share/compare/compare.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Imports material.angular.io */
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MercadoPagoComponent } from './mercado-pago/mercado-pago.component';
import { CieloComponent } from './cielo/cielo.component';
import { PagseguroComponent } from './pagseguro/pagseguro.component';
import { CalculadoraComponent } from './share/calculadora/calculadora.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { CompareDateComponent } from './share/compare-date/compare-date.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,
    CompareComponent,
    MercadoPagoComponent,
    CieloComponent,
    PagseguroComponent,
    CalculadoraComponent,
    CompareDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
