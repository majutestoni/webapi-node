export default interface IEmpresa {
  id?: number;

  razao_social: string;

  cep: string;

  cidade: string;

  estado: string;

  bairro: string;

  complemento?: string;
}
