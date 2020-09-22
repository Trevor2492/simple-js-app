//This defines an array of objects. The objects contain information for pokemon
let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Pikachu', height: '1', types: ['Electric', 'Fighting']},
    {name: 'Charmander', height: '2', types: ['Fire', 'Fighting']},
    {name: 'Bulbasaur', height: '3', types: ['Grass', 'Fighting']},
    {name: 'Squirtle', height: '1.5', types: ['Water', 'Fighting']}
  ];

  function add(pokemon) {
  pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

//This is a loop that displays the contents of the array to the browser
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height <= '2') {
    document.write(pokemon.name + ' (Height: ' + pokemon.height + ')' + '<br>');
  }
  else {
    document.write(pokemon.name + ' (Height: ' + pokemon.height + ')' + '- Wow, that\'s big!' + '<br>');
  }
});
