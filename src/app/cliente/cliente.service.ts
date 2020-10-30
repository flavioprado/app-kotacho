
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Cliente } from './cliente.model';
import { QueryBuilder, Page } from '../_util/Pagination';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private baseURL = environment.api.appBackend;

    private endpoint = 'clientes'

    constructor(private snackBar: MatSnackBar,
        private httpClient: HttpClient) { }

    listar(queryBuilder: QueryBuilder): Observable<Page<Cliente>> {

        return this.httpClient
            .get<Cliente[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(
                map(response => <Page<Cliente>>Page.fromResponse(response))
            );

    }

    download(): Observable<any> {
        const urlGet = `${this.baseURL}/${this.endpoint}/download`;

        return this.httpClient.get(urlGet, { responseType: 'blob' });
    }


    cadastrar(Cliente: Cliente): Observable<Cliente> {
        return this.httpClient.post<Cliente>(`${this.baseURL}/${this.endpoint}`, Cliente);
    }

    pesquisarPorId(id: string): Observable<Cliente> {
        return this.httpClient.get<Cliente>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    atualizar(cliente: Cliente): Observable<Cliente> {
        return this.httpClient.put<Cliente>(`${this.baseURL}/${this.endpoint}/${cliente.id}`, cliente);
    }

    deletar(_id: string): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${_id}`);
    }
    getClientes(): Observable<Cliente[]> {
        return this.httpClient.get<Cliente[]>(`${this.baseURL}/${this.endpoint}`).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }
    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }
    errorHandler(e: any): Observable<any> {
        this.showMessage("Ocorreu um erro!", true);
        return EMPTY;
    }

}