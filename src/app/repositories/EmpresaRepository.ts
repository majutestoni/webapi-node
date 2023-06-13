import Empresa from "../entities/Empresa";
import IEmpresa from "../interfaces/IEmpresa";
import { AppDataSource } from "../../database/data-source";
const empresaRepository = AppDataSource.getRepository(Empresa);

const getEmpresas = (): Promise<IEmpresa[]> => {
  return empresaRepository.find();
};

const postEmpresa = (empresa: IEmpresa): Promise<IEmpresa> => {
    return empresaRepository.save(empresa);
  };

  const getEmpresId = (id: number): Promise<IEmpresa> => {
 //   return empresaRepository.findOneBy();
  }

export default { getEmpresas, postEmpresa };
