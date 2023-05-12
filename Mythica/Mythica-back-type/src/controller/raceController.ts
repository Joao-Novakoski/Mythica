import { Request, Response } from "express";
import raceService from '../service/raceService';

export default class raceController {
  static async getAllRaces(req: Request, res: Response) {
    try {
      const Races = await raceService.listAllRaces();
      res.status(200).json(Races);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async getRaceById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Race = await raceService.getRaceById(id);
      res.status(200).json(Race);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async createRace(req: Request, res: Response) {
    try {
      const Race = await raceService.createRace(req.body);
      res.status(201).json(Race);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async updateRaceById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Race = await raceService.updateRaceById(id, req.body);
      res.status(200).json(Race);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async deleteRaceById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await raceService.deleteRaceById(id);
      res.status(204).json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
