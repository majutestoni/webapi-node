export default interface IEmpresa {
  id?: number;

  ativa?: boolean

  razao_social: string;

  cep: string;

  cidade: string;

  estado: string;

  bairro: string;

  complemento?: string;
}
