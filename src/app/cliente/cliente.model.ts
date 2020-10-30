import { Endereco } from '../interfaces/endereco.model';

export interface Cliente {
    id?:string,
    numero?: number,
    nome: string,
    email: string,
    telefone: number,
    cnpj: string,
    senha:string,
    endereco: Endereco
}