import { Endereco } from '../interfaces/endereco.model';
import { Item } from '../model/item';

export interface Pedido {
    id: number,
    numero: string,
    itens: Item[];
    status: string,
}