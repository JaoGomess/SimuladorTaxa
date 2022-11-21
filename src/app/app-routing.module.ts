import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CieloComponent } from './cielo/cielo.component';
import { HomeComponent } from './home/home.component';
import { MercadoPagoComponent } from './mercado-pago/mercado-pago.component';
import { PagseguroComponent } from './pagseguro/pagseguro.component';
import { CalculadoraComponent } from './share/calculadora/calculadora.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'mp', component: MercadoPagoComponent},
  { path: 'cielo', component: CieloComponent},
  { path: 'pagseguro', component: PagseguroComponent},
  { path: 'calculadora', component: CalculadoraComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
