import express from "express";

import classController from "../controller/classController";

const classRouter = express.Router();

classRouter.get("/", classController.getAllClasses);
classRouter.get("/:id", classController.getClassById);
classRouter.post("/", classController.createClass);
classRouter.patch("/:id", classController.updateClassById);
classRouter.delete("/:id", classController.deleteClassById);

export default classRouter;
