import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { DiezynueveComponent } from './diezynueve/diezynueve.component';
import { VeinteComponent } from './veinte/veinte.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent,
    DiezynueveComponent,
    VeinteComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
