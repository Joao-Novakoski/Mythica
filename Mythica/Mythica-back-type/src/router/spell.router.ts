import express from "express";

import spellController from "../controller/spellController";

const spellRouter = express.Router();

spellRouter.get("/", spellController.getAllSpells);
spellRouter.get("/:id", spellController.getSpellById);
spellRouter.post("/", spellController.createSpell);
spellRouter.patch("/:id", spellController.updateSpellById);
spellRouter.delete("/:id", spellController.deleteSpellById);

export default spellRouter;
