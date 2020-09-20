let pokemonList = [
  {name: 'Pikachu', height: '1', types: ['Electric', 'Fighting']},
  {name: 'Charmander', height: '2', types: ['Fire', 'Fighting']},
  {name: 'Bulbasaur', height: '3', types: ['Grass', 'Fighting']},
  {name: 'Squirtle', height: '1.5', types: ['Water', 'Fighting']}
];

for (var i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height <= '2') {
    document.write(pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') ' + '<br>');
  } else {
    document.write(pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') ' + '- Wow, that\s big!' + '<br>');
  }
}
