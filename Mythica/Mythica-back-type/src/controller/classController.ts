import { Request, Response } from "express";
import classService from "../service/classService";

export default class classController {
  static async getAllClasses(req: Request, res: Response) {
    try {
      const Classes = await classService.listAllClasses();
      res.status(200).json(Classes);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async getClassById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Class = await classService.getClassById(id);
      res.status(200).json(Class);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async createClass(req: Request, res: Response) {
    try {
      const Class = await classService.createClass(req.body);
      res.status(201).json(Class);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async updateClassById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Class = await classService.updateClassById(id, req.body);
      res.status(200).json(Class);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async deleteClassById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await classService.deleteClassById(id);
      res.status(204).json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
