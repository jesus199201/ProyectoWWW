import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbagrComponent } from './navbagr/navbagr.component';
import { ForgotUpswComponent } from './forgot-upsw/forgot-upsw.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { FooterComponent } from './footer/footer.component';
import { VentasComponent } from './ventas/ventas.component';

import {Routes, RouterModule} from '@angular/router';

//Links, aqui se crean los enlaces para usar en el codigo con la etiqueta href="/#$@&%"
const appRoutes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'ForgotUpsw', component: ForgotUpswComponent},
  {path: 'ProductForm', component: ProductFormComponent},
  {path: 'Supplier', component: SupplierComponent},
  {path: 'Estadisticas', component: EstadisticasComponent},
  {path: 'Ventas', component: VentasComponent},
  {path: 'consDeudas', component: CuentasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbagrComponent,
    ForgotUpswComponent,
    ProductFormComponent,
    SupplierComponent,
    CuentasComponent,
    EstadisticasComponent,
    FooterComponent,
    VentasComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
