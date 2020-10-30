
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { QueryBuilder, Page } from '../_util/Pagination';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Produto } from '../interfaces/produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    private baseURL = environment.api.appBackend;

    private endpoint = 'produtos';


    constructor(private snackBar: MatSnackBar,
        private httpClient: HttpClient) { }

    listar(queryBuilder: QueryBuilder): Observable<Page<Produto>> {

        return this.httpClient
            .get<Produto[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(
                map(response => <Page<Produto>>Page.fromResponse(response))
            );

    }

    cadastrar(produto: Produto): Observable<HttpResponse<Produto>> {
        return this.httpClient.post<Produto>(`${this.baseURL}/${this.endpoint}`, produto, {
            observe: 'response'
        });
    }

    // save(documentoAmbiental: DocumentoAmbientalResource): Observable<EntityResponseType> {
    //     return this.http.post<DocumentoAmbientalResource>(this.resourceUrl, documentoAmbiental, {
    //       observe: 'response'
    //     });
    //   }

    //   delete(documentoAmbiental: DocumentoAmbientalResource): Observable<EntityResponseType> {
    //     return this.http.delete<DocumentoAmbientalResource>(
    //       this.resourceUrl + '/' + documentoAmbiental.id,
    //       {
    //         observe: 'response'
    //       }
    //     );
    //   }

    pesquisarPorId(id: string): Observable<Produto> {
        return this.httpClient.get<Produto>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    atualizar(produto: Produto): Observable<Produto> {
        const result = this.httpClient.post<Produto>(`${this.baseURL}/${this.endpoint}`, produto);
        return result;
    }

    deletar(_id: string): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${_id}`);
    }
    uploadImage(file: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseURL}/${this.endpoint}/upload`, file);
    }
    getProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(`${this.baseURL}/${this.endpoint}`).pipe(
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