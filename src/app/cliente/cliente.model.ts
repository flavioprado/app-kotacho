import { Endereco } from '../interfaces/endereco.model';

export interface Cliente {
    cli_id: number,
    nome: string,
    email: string,
    telefone: number,
    cpnj: string,
    endereco: Endereco
}