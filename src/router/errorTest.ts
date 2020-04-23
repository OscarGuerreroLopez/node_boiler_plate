import { Router } from "express";
import asyncHandler from "express-async-handler";

import {
  getErrorOne,
  getErrorTwo,
  getErrorThree,
  getErrorFour,
  getErrorFive,
  getErrorSix,
} from "../handlers/errorTest";

const router = Router();

router.get("/one", getErrorOne);
router.get("/two", getErrorTwo);
router.get("/three", getErrorThree);
router.get("/four", getErrorFour);
router.get("/five", getErrorFive);
router.get("/six", asyncHandler(getErrorSix));

export default router;
