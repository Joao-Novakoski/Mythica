import { Schema, model } from "mongoose";

const spellSchema = new Schema({
  name: { type: String, required: true },
  desc: String,
  range: Number,
  components: [String],
  duration: String,
  concentration: Boolean,
  casting_time: String,
  ritual: Boolean,
  higher_level: [String],
  material: String,
  area_of_effect: {
    size: { type: Number, required: true },
    area: { type: String, required: true }
  },
  level: Number,
  attack_type: String,
  damage: {
    damage_for_bonus_level: { type: String, required: true },
    damage_type: { type: String, required: true },
  },
  school: String,
  classes: [String],
  subclasses: [String]
})

const spellModel = model('spell', spellSchema)
spellModel.syncIndexes();

export default spellModel;
