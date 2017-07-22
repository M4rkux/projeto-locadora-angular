import { Component, OnInit } from '@angular/core';

import { Filme } from '../models/filme';

@Component({
  selector: 'app-filme-novo',
  templateUrl: './filme-novo.component.html',
  styleUrls: ['./filme-novo.component.css']
})
export class FilmeNovoComponent implements OnInit {

  sucesso = false;
  filme: Filme = {
    ID: 0,
    Titulo: '',
    Genero: ''
  };

  constructor() { }

  ngOnInit() {
  }

  enviar(): void {
    this.sucesso = true;
  }

  debug(): string {
    return JSON.stringify(this.filme);
  }
}
