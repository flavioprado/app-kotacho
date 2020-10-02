
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from './cliente.model';
import { QueryBuilder, Page } from '../_util/Pagination';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private baseURL = environment.api.appBackend;

    private endpoint = 'clientes'

    constructor(private httpClient: HttpClient) { }

    listar(queryBuilder: QueryBuilder): Observable<Page<Cliente>> {

        return this.httpClient
            .get<Cliente[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(
                map(response => <Page<Cliente>>Page.fromResponse(response))
            );

    }

    cadastrar(Cliente: Cliente): Observable<Cliente> {
        return this.httpClient.post<Cliente>(`${this.baseURL}/${this.endpoint}`, Cliente);
    }

    pesquisarPorId(id: string): Observable<Cliente> {
        return this.httpClient.get<Cliente>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    atualizar(cliente: Cliente): Observable<Cliente> {
        return this.httpClient.put<Cliente>(`${this.baseURL}/${this.endpoint}/${cliente.cli_id}`, cliente);
    }

    deletar(cliente: Cliente): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${cliente.cli_id}`);
    }
}