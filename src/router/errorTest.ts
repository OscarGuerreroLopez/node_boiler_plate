import { Router } from "express";
import { getError } from "../handlers/errorTest";

const router = Router();

router.get("/", getError);

export default router;
