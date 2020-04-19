import { Router } from "express";
import {
  getErrorOne,
  getErrorTwo,
  getErrorThree,
  getErrorFour,
  getErrorFive,
} from "../handlers/errorTest";

const router = Router();

router.get("/one", getErrorOne);
router.get("/two", getErrorTwo);
router.get("/three", getErrorThree);
router.get("/four", getErrorFour);
router.get("/five", getErrorFive);

export default router;
