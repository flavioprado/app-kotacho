import { Endereco } from '../interfaces/endereco.model';
import { Item } from '../model/item';

export interface Pedido {
    id?: string,
    numero: string,
    itens: Item[];
    status: string,
    desconto: number,
    valorTotal: number
}