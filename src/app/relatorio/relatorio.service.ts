
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { QueryBuilder, Page } from '../_util/Pagination';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Produto } from '../interfaces/produto.model';
import { saveAs } from 'file-saver';



@Injectable({
    providedIn: 'root'
})
export class RelatorioService {
    private baseURL = environment.api.apiUrl;

    private endpoint = 'relatorios';


    constructor(private snackBar: MatSnackBar,
        private httpClient: HttpClient) { }

    pedidoClientes(): Observable<any> {
        return this.httpClient.get<any>(`${this.baseURL}/${this.endpoint}/pedidos/clientes`);
    }

    public downloadPDF(): Observable<any> {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/pedidos/clientes`, {  responseType: 'blob' });

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