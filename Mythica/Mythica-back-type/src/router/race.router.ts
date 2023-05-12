import express from "express";

import raceController from "../controller/raceController";

const raceRouter = express.Router();

raceRouter.get("/", raceController.getAllRaces);
raceRouter.get("/:id", raceController.getRaceById);
raceRouter.post("/", raceController.createRace);
raceRouter.patch("/:id", raceController.updateRaceById);
raceRouter.delete("/:id", raceController.deleteRaceById);

export default raceRouter;
