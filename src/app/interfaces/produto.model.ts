import { Categoria } from '../categoria/categoria.model';

export interface Produto {
    id?:string,
    numero?: number,
    nome: string,
    detalhe: string,
    image: any,
    categoria: any,
    medida: string,
    precoCusto: number,
    precoVenda: number,
}