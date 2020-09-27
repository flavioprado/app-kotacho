import { Endereco } from '../interfaces/endereco.model';

export interface Cliente {
    cli_id: number,
    nome: string,
    email: string,
    telefone: number,
    cnpj: string,
    senha:string,
    endereco: Endereco
}