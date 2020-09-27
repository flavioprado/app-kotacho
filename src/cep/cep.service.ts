
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {
    // https://viacep.com.br/ws/01001000/json/
  private cepURL = 'https://viacep.com.br/ws';

  private endpoint= 'clientes'

  constructor(private httpClient: HttpClient) { }

  
  pesquisar(cep: string): Observable<any> {
      return this.httpClient.get<any>(`${this.cepURL}/${cep}/json`);
  }

  
}