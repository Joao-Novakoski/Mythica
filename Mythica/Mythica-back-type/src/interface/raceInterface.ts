export default interface RaceInterface {
  name: String;
  speed?: Number;
  ability_bonuses?: Array<
    {
      name: String;
      quantity: Number;
    }
  >;
  age?: {
    description: String;
    age_number: String;
  };
  alignment?: String;
  size?: {
    size: String;
    description: String;
  };
  languages?: {
    languages: String[];
    language_description: String;
  };
  traits?: Array<
    {
      name: String;
      description: String;
    }
  >;
  subraces?: Array<subrace>;
}

interface subrace {
  ability_bonuses?: Array<
    {
      name: String;
      quantity: Number;
    }
  >;
  traits?: Array<
    {
      name: String;
      description: String;
    }
  >;
}
