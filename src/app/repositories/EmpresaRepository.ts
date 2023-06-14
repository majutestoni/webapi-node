import Empresa from "../entities/Empresa";
import IEmpresa from "../interfaces/IEmpresa";
import { AppDataSource } from "../../database/data-source";
import { FindOptionsWhere, UpdateResult } from "typeorm";
const empresaRepository = AppDataSource.getRepository(Empresa);

const getEmpresas = (): Promise<IEmpresa[]> => {
  return empresaRepository.find();
};

const postEmpresa = (empresa: IEmpresa): Promise<IEmpresa> => {
  return empresaRepository.save(empresa);
};

const updateEmpresa = (empresaAtual: IEmpresa, atualizar): Promise<UpdateResult> => {
  return empresaRepository.update(atualizar, empresaAtual);
}

const getEmpresaById = (id: number): Promise<IEmpresa> => {
  return empresaRepository.query(`SELECT * FROM empresas WHERE id = ${id}`);
};
export default { getEmpresas, postEmpresa, getEmpresaById, updateEmpresa };
