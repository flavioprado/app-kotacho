
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pedido } from './pedido.model';
import { QueryBuilder, Page } from '../_util/Pagination';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item';

@Injectable({
    providedIn: 'root'
})
export class PedidoService {
    
    private baseURL = environment.api.apiUrl;

    private subject = new Subject<Item[]>();
    private itens = Array<Item>();
    private endpoint = 'pedidos'

    constructor(private httpClient: HttpClient) { }

    listar(queryBuilder: QueryBuilder): Observable<Page<Pedido>> {
        return this.httpClient
            .get<Pedido[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(
                map(response => <Page<Pedido>>Page.fromResponse(response))
            );
    }

    cadastrar(pedido: Pedido): Observable<Pedido> {
        return this.httpClient.post<Pedido>(`${this.baseURL}/${this.endpoint}`, pedido);
    }

    pesquisarPorId(id: string): Observable<Pedido> {
        return this.httpClient.get<Pedido>(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    pesquisarPorCod(cod: number): Observable<Pedido> {
        return this.httpClient.get<Pedido>(`${this.baseURL}/${this.endpoint}/${cod}`);
    }

    atualizar(pedido: Pedido): Observable<Pedido> {
        return this.httpClient.post<Pedido>(`${this.baseURL}/${this.endpoint}`, pedido);
    }
    deletar(_id:string): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${_id}`);
    }

    

    addItem(item: Item) {
        this.itens.push(item);
        this.subject.next(this.itens);
    }

    removeItem(item) {
        this.itens = this.itens.filter(elem => elem !== item);
        this.subject.next(this.itens);
    }

    loadItens(id: string): Observable<Item[]> {
        return this.subject;
    }

    OnDestroy() {
        this.subject.unsubscribe();
    }

    itensIsEmpty(): boolean {
        return this.itens.length === 0;
    }

    

}

