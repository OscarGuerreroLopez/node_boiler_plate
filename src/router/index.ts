import { Router, Request, Response } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

import meta from "./meta";

const router = Router();

// middlewares
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors({ credentials: true, origin: true }));

// routes
router.use("/meta", meta);

// Should not be used like this
router.get("/hello", (request: Request, response: Response) => {
  response.send(request.body);
});

export default router as Router;
