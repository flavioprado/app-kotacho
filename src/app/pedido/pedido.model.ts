import { Cliente } from '../cliente/cliente.model';
import { Endereco } from '../interfaces/endereco.model';
import { Item } from '../model/item';

export interface Pedido {
    id?: string,
    numero: string,
    cliente: any,
    ativo: boolean,
    itens: Item[],
    status: string,
    desconto: number,
    precoestimado: any,
    precofinal: any,
    dataInclusao: any,
    dataAtualizacao: any,
}