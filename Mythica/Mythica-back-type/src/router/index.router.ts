import express from "express";

import classRouter from "./class.router";
import raceRouter from "./race.router";
import spellRouter from "./spell.router";

const Router = express.Router();

Router.use("/class", classRouter);
Router.use("/races", raceRouter);
Router.use("/spell", spellRouter);

export default Router;
