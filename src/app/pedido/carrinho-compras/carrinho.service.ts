
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Item } from 'src/app/model/item';
import { QueryBuilder, Page } from 'src/app/_util/Pagination';
import { Pedido } from '../pedido.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {

    private baseURL = environment.api.apiUrl;

    private subject = new Subject<Item[]>();
    private itens: Item[] = [];
    private endpoint = 'pedidos'

    onNewItem: EventEmitter<Item> = new EventEmitter<Item>();

    constructor(private http: HttpClient) { }

    getItens() {
        return this.itens;
    }
    setItens(itens: Item[]) {
        this.itens = itens;
    }

    addItem(item: Item) {
        this.itens.push(item);
        this.onNewItem.emit(item);
    }

    listar(queryBuilder: QueryBuilder): Observable<Page<Pedido>> {

        return this.http
            .get<Pedido[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(
                map(response => <Page<Pedido>>Page.fromResponse(response))
            );
    }

    cadastrar(Pedido: Pedido): Observable<Pedido> {
        return this.http.post<Pedido>(`${this.baseURL}/${this.endpoint}`, Pedido);
    }

    pesquisarPorId(id: string): Observable<Pedido> {
        return this.http.get<Pedido>(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    pesquisarPorCod(cod: number): Observable<Pedido> {
        return this.http.get<Pedido>(`${this.baseURL}/${this.endpoint}/${cod}`);
    }

    atualizar(pedido: Pedido): Observable<Pedido> {
        return this.http.put<Pedido>(`${this.baseURL}/${this.endpoint}/${pedido.id}`, pedido);
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

    deletar(_id: string): Observable<{}> {
        return this.http.delete(`${this.baseURL}/${this.endpoint}/${_id}`);
    }

}

