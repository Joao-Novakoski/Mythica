import { Document } from 'mongoose';

export default interface IClass extends Document {
  name: string;
  life_dice?: number;
  class_levels?: IClassLevels[];
  proficiencies: string[];
  proficiencies_choices?: {
    description: string;
    proficiencies: string[];
  };
  saving_throws: string[];
  starting_equipment: IStartingEquipment[];
  starting_equipment_choices?: IStartingEquipmentChoices[];
  subclasses: ISubclasses[];
}

interface IClassLevels {
  level: number;
  ability_score_bonuses: number;
  proficiency_bonus: number;
  features: {
    name: string;
    description: string;
  }[];
  class_specific?: object;
}

interface IStartingEquipment {
  name: string;
  description: string;
  quantity: number;
}

interface IStartingEquipmentChoices {
  description: string;
  items: IItens[];
}

interface IItens {
  name: string;
  description: string;
  quantity: number;
}

interface ISubclasses {
  name: string;
  url: string;
}