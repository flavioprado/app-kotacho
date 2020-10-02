
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryBuilder, Page } from '../_util/Pagination';
import { Produto } from '../interfaces/produto.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    private baseURL = environment.api.appBackend;

    private endpoint = 'produtos'

    constructor(private httpClient: HttpClient) { }

    listar(queryBuilder: QueryBuilder): Observable<Page<Produto>> {

        return this.httpClient
            .get<Produto[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(
                map(response => <Page<Produto>>Page.fromResponse(response))
            );

    }

    cadastrar(produto: Produto): Observable<Produto> {
        return this.httpClient.post<Produto>(`${this.baseURL}/${this.endpoint}`, produto);
    }

    pesquisarPorId(id: string): Observable<Produto> {
        return this.httpClient.get<Produto>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    atualizar(produto: Produto): Observable<Produto> {
        return this.httpClient.put<Produto>(`${this.baseURL}/${this.endpoint}/${produto.id}`, produto);
    }

    deletar(produto: Produto): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${produto.id}`);
    }
}