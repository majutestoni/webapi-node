import { Request, Response, Router } from "express";
import LicensaAmbientalRepository from "../repositories/LicensaAmbientalRepository";
import ILicensaAmbiental from "../interfaces/ILicensaAmbiental";

const licensasRouter = Router();
licensasRouter.get("/", async (_req: Request, res: Response): Promise<Response> => {
  try {
    const licensas = await LicensaAmbientalRepository.getLicensas();
    return res.status(200).json(licensas);
  } catch (error) {
    return res.status(401).json("Nenhuma licensa encontrada");
  }
});

const licensaRouter = Router();
licensaRouter.post("/insert", async (req: Request, res: Response): Promise<Response> => {
  try {
    const newLicensa: ILicensaAmbiental = req.body;
    const licensa = await LicensaAmbientalRepository.postLicensa(newLicensa);
    return res.status(200).json(licensa);
  } catch (error) {
    return res.status(422).json("Formato inválido");
  }
});

export { licensasRouter, licensaRouter };
