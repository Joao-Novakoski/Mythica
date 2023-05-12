import IRace from "../interface/raceInterface";
import RaceModel from "../model/RaceModel";

export default class raceService {
  static async listAllRaces(): Promise<IRace[]> {
    return RaceModel.find();
  }

  static async getRaceById(_id: string): Promise<IRace> {
    const foundRace: IRace | null = await RaceModel.findById(_id);

    if (!foundRace) throw new Error("race not found");

    return foundRace;
  }

  static async createRace(race: IRace): Promise<IRace> {
    const createdRace: IRace | null = await RaceModel.create(race);

    if (!createdRace) throw new Error("Error to create race");

    return createdRace;
  }

  static async updateRaceById(id: string, race: IRace): Promise<IRace> {
    for (const value in race) {
      if (!(race as any)[value]) (race as any)[value] = undefined;
    }

    const updatedRace: IRace | null = await RaceModel.findByIdAndUpdate(
      id,
      race,
      {
        returnOriginal: false,
      }
    );

    if (!updatedRace) throw new Error("Error to update race");

    return updatedRace;
  }

  static async deleteRaceById(id: string): Promise<IRace> {
    const deleteRace: IRace | null = await RaceModel.findByIdAndDelete(id);

    if (!deleteRace) throw new Error("Error to delete race");

    return deleteRace;
  }
}
