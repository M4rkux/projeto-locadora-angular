import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/rx';

import { Filme } from './models/filme';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit, OnDestroy {

  isncricao: Subscription;
  filmes: any[];

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.isncricao = this.filmeService.getFilmes().subscribe((response) => {
      this.filmes = response;
    });
  }

  ngOnDestroy() {
    this.isncricao.unsubscribe();
  }

}
