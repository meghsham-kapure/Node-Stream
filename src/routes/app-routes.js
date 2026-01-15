import { Router } from "express";
import { healthCheck } from "../controllers/app-controller.js";

const appRouter = Router();

appRouter.route("/healthcheck").get(healthCheck);

export { appRouter };
