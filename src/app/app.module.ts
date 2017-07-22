import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FilmeService } from './filme/filme.service';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { FilmeDetalheComponent } from './filme/filme-detalhe/filme-detalhe.component';
import { FilmeNovoComponent } from './filme/filme-novo/filme-novo.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    FilmeDetalheComponent,
    FilmeNovoComponent,
    HomeComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule, FormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
