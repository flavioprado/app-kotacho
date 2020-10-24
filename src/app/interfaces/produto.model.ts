import { Categoria } from '../categoria/categoria.model';

export interface Produto {
    id?: string,
    nome: string,
    detalhe: string,
    image: any,
    categoria: any,
    medida: string,
    precoCusto: number,
    precoVenda: number,
}