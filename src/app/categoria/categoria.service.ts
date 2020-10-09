
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from './categoria.model';
import { QueryBuilder, Page } from '../_util/Pagination';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    private baseURL = environment.api.appBackend;

    private endpoint = 'categorias'

    constructor(private httpClient: HttpClient) { }

    listar(queryBuilder: QueryBuilder): Observable<Page<Categoria>> {

        return this.httpClient
            .get<Categoria[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(
                map(response => <Page<Categoria>>Page.fromResponse(response))
            );

    }

    cadastrar(Categoria: Categoria): Observable<Categoria> {
        return this.httpClient.post<Categoria>(`${this.baseURL}/${this.endpoint}`, Categoria);
    }

    pesquisarPorId(id: string): Observable<Categoria> {
        return this.httpClient.get<Categoria>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    atualizar(categoria: Categoria): Observable<Categoria> {
        return this.httpClient.put<Categoria>(`${this.baseURL}/${this.endpoint}/${categoria.id}`, categoria);
    }

    deletar(categoria: Categoria): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${categoria.id}`);
    }
}