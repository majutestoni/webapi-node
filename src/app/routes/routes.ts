import { Router } from "express";
import { empresaRouter, empresasRouter } from "../controllers/EmpresaController";
import { licensaRouter, licensasRouter } from "../controllers/LicensaAmbientalController";

const router = Router();

router.use('/empresas', empresasRouter);
router.use('/empresa', empresaRouter);
router.use('/licensas', licensasRouter);
router.use('/licensa', licensaRouter);

export default router;
