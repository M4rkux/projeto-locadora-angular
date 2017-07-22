import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeNovoComponent } from './filme/filme-novo/filme-novo.component';
import { FilmeDetalheComponent } from './filme/filme-detalhe/filme-detalhe.component';
import { FilmeComponent } from './filme/filme.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Contato', component: ContatoComponent },
    { path: 'Filmes', component: FilmeComponent, children: [
        { path: 'novo', component: FilmeNovoComponent},
        { path: ':id', component: FilmeDetalheComponent}
    ] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
