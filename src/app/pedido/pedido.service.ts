
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pedido } from './pedido.model';
import { QueryBuilder, Page } from '../_util/Pagination';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item';
import { ProdutoService } from '../produto/produto.service';

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    private baseURL = environment.api.apiUrl;

    private subject = new Subject<Item[]>();
    private itens = Array<Item>();
    private endpoint = 'pedidos'

    constructor(private httpClient: HttpClient,
        private produtoService: ProdutoService) {

    }

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

    salvar(pedido: Pedido): Observable<Pedido> {
        return this.httpClient.post<Pedido>(`${this.baseURL}/${this.endpoint}`, pedido);
    }
    alterarSituacao(pedidos: Pedido[]): Observable<Pedido[]> {
        return this.httpClient.post<Pedido[]>(`${this.baseURL}/${this.endpoint}`, pedidos);
    }
    deletar(_id: string): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${_id}`);
    }

    async consultarPreco(idProduto: string) {
        const result = await this.produtoService.pesquisarPorId(idProduto).toPromise();
        return result;
    }
    

    atualizarPrecos(updatePrecoFinal: boolean, pedido: any) {
        pedido.itens.forEach(async (item: Item) => {
            const prod = await this.consultarPreco(item.produto.id);
            if (updatePrecoFinal) {
                item.precoFinal = (prod.precoVenda * item.quantidade);
            }
            item.precoEstimado = (prod.precoVenda * item.quantidade);          
        });
        debugger;
        return pedido;
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

