
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

    list(): Observable<Categoria[]> {
        return this.httpClient
            .get<Categoria[]>(`${this.baseURL}/${this.endpoint}`);
    }

    cadastrar(categoria: Categoria): Observable<Categoria> {
        return this.httpClient.post<Categoria>(`${this.baseURL}/${this.endpoint}`, categoria);
    }

    pesquisarPorId(id: string): Observable<Categoria> {
        return this.httpClient.get<Categoria>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    atualizar(categoria: Categoria): Observable<Categoria> {
        const result = this.httpClient.post<Categoria>(`${this.baseURL}/${this.endpoint}`, categoria);
         console.log(JSON.stringify(result));
        return result;
    }

    deletar(categoria: Categoria): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${categoria.id}`);
    }
}