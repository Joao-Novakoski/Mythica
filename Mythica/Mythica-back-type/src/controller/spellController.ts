import { Request, Response } from "express";
import spellService from "../service/spellService";

export default class spellController {
  static async getAllSpells(req: Request, res: Response) {
    try {
      const Spells = await spellService.listAllSpells();
      res.status(200).json(Spells);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async getSpellById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const spell = await spellService.getSpellById(id);
      res.status(200).json(spell);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async createSpell(req: Request, res: Response) {
    try {
      const spell = await spellService.createSpell(req.body);
      res.status(201).json(spell);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async updateSpellById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const spell = await spellService.updateSpellById(id, req.body);
      res.status(200).json(spell);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async deleteSpellById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await spellService.deleteSpellById(id);
      res.status(204).json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
