import { Subscription } from 'rxjs/rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmeService } from './../filme.service';
import { Filme } from './../models/filme';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})
export class FilmeDetalheComponent implements OnInit, OnDestroy {

  inscricaoID: Subscription;
  inscricaoFilme: Subscription;
  filme: Filme = {
    ID: 0,
    Titulo: '',
    Genero: ''
  };

  constructor(private route: ActivatedRoute, private filmeService: FilmeService) { }

  ngOnInit() {
    this.inscricaoID = this.route.params.subscribe((params) => {
      this.inscricaoFilme = this.filmeService.getFilme(params['id']).subscribe((response) => {
        this.filme = response;
      });
    });
  }

  ngOnDestroy() {
    this.inscricaoID.unsubscribe();
    this.inscricaoFilme.unsubscribe();
  }

}
