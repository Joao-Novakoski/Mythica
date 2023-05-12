const listFormat = new Intl.ListFormat('pt-BR', { style: 'long', type: 'conjunction' })

function useClassHandler({ Class }){

  const proifciencies = [...Class.proficiencies];
  const savingThrows = [...Class.saving_throws];
  
  return content = {
    "Dado de vida:": Class.life_dice,
    "Proficiência:": listFormat.format(expertise),
    "Perícias:": Class.proficiencies_choices.description,
  	"Testes de salvaguarda:": listFormat.format(savingThrows),
    "Equipamento inicial:": '',
    "Sub-classes:": ''
  };
}