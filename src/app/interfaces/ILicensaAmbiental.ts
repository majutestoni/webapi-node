import IEmpresa from "./IEmpresa";

export default interface ILicensaAmbiental {
  id?: number;

  numero: string;

  orgao_ambiental: string;

  emissao: Date;

  validade: Date;

  empresa: IEmpresa;
}
