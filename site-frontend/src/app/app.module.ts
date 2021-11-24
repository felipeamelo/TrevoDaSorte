import { NgModule,
         CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { RouterModule }             from '@angular/router';
import { CommonModule }             from '@angular/common';

import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HttpClientModule }         from '@angular/common/http';
import { CdkTableModule }           from '@angular/cdk/table';
import { MatTableModule,
         MatSortModule,
         MatProgressSpinnerModule } from '@angular/material';

import { InlineSVGModule }          from 'ng-inline-svg';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';

import { HeaderComponent }          from './header/header.component';
import { HomeComponent }            from './home/home.component';
import { Home2Component }           from './home2/home2.component';
import { JogarComponent }           from './jogar/jogar.component';
import { PremiosComponent }         from './premios/premios.component';
import { VencedoresComponent }      from './vencedores/vencedores.component';
import { AgenteComponent }          from './agente/agente.component';
import { PerguntasComponent }       from './perguntas/perguntas.component';
import { FooterComponent }          from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Home2Component,
    JogarComponent,
    PremiosComponent,
    VencedoresComponent,
    AgenteComponent,
    PerguntasComponent,
    FooterComponent,
  ],

  imports: [
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    InlineSVGModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ],
  
  exports: [
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class AppModule { }
