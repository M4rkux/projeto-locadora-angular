import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmeService {

  private api = 'http://localhost:49734/api/';

  constructor(private http: Http) { }

  getFilmes() {
    return this.http.get(this.api + 'filme/').map(res => res.json());
  }

  getFilme(id: number) {
    return this.http.get(this.api + 'filme/' + id).map(res => res.json());
  }

}
