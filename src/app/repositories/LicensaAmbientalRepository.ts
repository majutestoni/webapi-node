import { AppDataSource } from "../../database/data-source";
import LicensaAmbiental from "../entities/LicensaAmbiental";
import ILicensaAmbiental from "../interfaces/ILicensaAmbiental";
const licensaRepository = AppDataSource.getRepository(LicensaAmbiental);

const getLicensas = (): Promise<ILicensaAmbiental[]> => {
  return licensaRepository.find();
};

const postLicensa = (licensa: ILicensaAmbiental): Promise<LicensaAmbiental> => {
    return licensaRepository.save(licensa);
  };

export default { getLicensas, postLicensa };
