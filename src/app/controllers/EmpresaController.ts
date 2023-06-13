import { Request, Response, Router } from "express";
import Empresa from "../entities/Empresa";
import IEmpresa from "../interfaces/IEmpresa";
import EmpresaRepository from "../repositories/EmpresaRepository";

const empresasRouter = Router();
const empresaRouter = Router();

empresasRouter.get("/", async (_req: Request, res: Response): Promise<Response> => {
  try {
    const empresas = await EmpresaRepository.getEmpresas();
    return res.status(200).json(empresas);
  } catch (error) {
    return res.status(401).json("Nenhuma empresa encontrada");
  }
});

empresaRouter.post("/insert", async (req: Request, res: Response): Promise<Response> => {
  try {
    const newEmpresa: IEmpresa = req.body;

    const empresa = await EmpresaRepository.postEmpresa(newEmpresa);
    return res.status(200).json(empresa);
  } catch (error) {
    return res.status(422).json("formato invalido")
  }
});

empresaRouter.post("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
      const newEmpresa: IEmpresa = req.body;
  
      const empresa = await EmpresaRepository.postEmpresa(newEmpresa);
      return res.status(200).json(empresa);
    } catch (error) {
      return res.status(422).json("formato invalido")
    }
  });

export { empresasRouter, empresaRouter };
