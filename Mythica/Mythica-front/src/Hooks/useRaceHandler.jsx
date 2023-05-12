const listFormat = new Intl.ListFormat('pt-BR', { style: 'long', type: 'conjunction' })

function useRaceHandler({ race }) {

  const languages = [];
  for (const language of race.languages) languages.push(language.name);

  const atributes = [];
  for (const atribute of race.ability_bonuses)
    atributes.push(atribute.ability_score.name);

  return content = {
    "Atributos:": listFormat.format(atributes),
    "Tendência comum:": race.alignment,
    "Idade:": race.age,
    "Tamanho:": race.size_description,
    "Idiomas:": listFormat.format(languages),
    "Deslocamento:": race.s,
  };
}

export default useRaceHandler;
