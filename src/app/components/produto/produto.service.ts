import { Injectable } from '@angular/core';
import { Produto } from './produto.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = 'http://localhost:3001/produtos'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  
  create(Produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, Produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}