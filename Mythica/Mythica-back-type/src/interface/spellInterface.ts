export default interface ISpell {
  name: string,
  desc?: string,
  range?: number,
  components?: string[],
  duration?: string,
  concentration?: boolean,
  casting_time?: string,
  ritual?: boolean,
  higher_level?: string[],
  area_of_effect?: {
    size: number,
    area: string
  },
  level?: number,
  attack_type?: string,
  damage?: {
    damage_for_bonus_level: string,
    damage_type: string
  },
  school?: string,
  classes?: string[],
  subclasses?: string[]
}