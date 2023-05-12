import { Schema, model } from "mongoose";

const subraceSchema = new Schema({
  ability_bonuses: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  traits: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

const raceSchema = new Schema({
  name: { type: String, required: true },
  speed: Number,
  ability_bonuses: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  age: {
    description: { type: String, required: true },
    age_number: { type: String, required: true },
  },
  alignment: String,
  size: {
    size: { type: String, required: true },
    description: { type: String, required: true },
  },
  languages: {
    languages: { type: [String], required: true },
    language_description: { type: String, required: true },
  },
  traits: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  subraces: [subraceSchema],
});

const RaceModel = model("Race", raceSchema);
RaceModel.syncIndexes();

export default RaceModel;
