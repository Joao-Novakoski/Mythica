import { Schema, model } from "mongoose";

const classLevelsSchema = new Schema({
  level: { type: Number, required: true },
  ability_score_bonuses: { type: Number, required: true },
  proficiency_bonus: { type: Number, required: true },
  features: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  class_specific: {},
});

const classSchema = new Schema({
  name: { type: String, required: true },
  life_dice: Number,
  class_levels: [classLevelsSchema],
  proficiencies: [String],
  proficiencies_choices: {
    description: { type: String, required: true },
    proficiencies: { type: [String], required: true },
  },
  saving_throws: [String],
  starting_equipment: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  starting_equipment_choices: [
    {
      description: { type: String, required: true },
      items: [
        {
          name: { type: String, required: true },
          description: { type: String, required: true },
          quantity: { type: Number, required: true },
        },
      ],
    },
  ],
  subclasses: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

const ClassModel = model("Class", classSchema);
ClassModel.syncIndexes();

export default ClassModel;