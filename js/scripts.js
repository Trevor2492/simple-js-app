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

  function addListItem(pokemon){
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    list.appendChild(listItem);
    //This listens for the user to click on one of the pokemon in the list, then runs the showDetails() function
    button.addEventListener('click', function(event){showDetails(pokemon);});
  }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

//This is a loop that displays the contents of the array to the browser
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
