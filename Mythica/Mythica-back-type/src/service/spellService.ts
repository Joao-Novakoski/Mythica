import ISpell from "../interface/spellInterface";
import spellModel from "../model/spellModel";

export default class spellService {
  static async listAllSpells(): Promise<ISpell[]> {
    return spellModel.find();
  }

  static async getSpellById(_id: string): Promise<ISpell> {
    const foundSpell: ISpell | null = await spellModel.findById(_id);

    if (!foundSpell) throw new Error("Spell not found");

    return foundSpell;
  }

  static async createSpell(Spell: ISpell): Promise<ISpell> {
    const createdSpell: ISpell | null = await spellModel.create(Spell);

    if (!createdSpell) throw new Error("Error to create Spell");

    return createdSpell;
  }

  static async updateSpellById(id: string, Spell: ISpell): Promise<ISpell> {
    for (const value in Spell) {
      if (!(Spell as any)[value]) (Spell as any)[value] = undefined;
    }

    const updatedSpell: ISpell | null = await spellModel.findByIdAndUpdate(
      id,
      Spell,
      {
        returnOriginal: false,
      }
    );

    if (!updatedSpell) throw new Error("Error to update Spell");

    return updatedSpell;
  }

  static async deleteSpellById(id: string): Promise<ISpell> {
    const deleteSpell: ISpell | null = await spellModel.findByIdAndDelete(id);

    if (!deleteSpell) throw new Error("Error to delete Spell");

    return deleteSpell;
  }
}
