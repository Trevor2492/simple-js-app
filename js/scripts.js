//This defines an array of objects. The objects contain information for pokemon
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
  pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  //This function adds a list item to the list for each pokemon
  function addListItem(pokemon){
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add('btn-primary');
    listItem.appendChild(button);
    list.appendChild(listItem);
    //This listens for the user to click on one of the pokemon in the list, then runs the showDetails() function
    button.addEventListener('click', function(event){showDetails(pokemon);});
  }

  //This used to just display the pokemons details to the modal when clicked
  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      showModal(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

//This is a loop that displays the contents of the array to the browser
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//The functions below show the modal in the browser
function showModal(pokemon) {
  let modalContainer = document.querySelector('.modal');

  modalContainer.innerHTML = ''; //clears all existing modal content in the "modal-container" div
  let modal = document.createElement('div'); //creates the new div under the "modal-container parent div"
  modal.classList.add('.modal-content'); //assigns the "modal-content" class to the new div we just created

  //add the new content into the new "modal" div (Title, text content, and close button)
  //close button element
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('close');
  closeButtonElement.innerText = 'x';

  //Title element
  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  //Height content
  let contentHeight = document.createElement('p');
  contentHeight.innerText = 'Height: ' + pokemon.height;

  //Image content
  let imageElement = document.createElement('img');
  imageElement.src = pokemon.imageUrl;

  //this closes/hides the modal when the user clicks "Close", hits "Escape", or clicks outside the modal
  //Closes on click
  closeButtonElement.addEventListener('click', hideModal);
  //Closes on "Escape"
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('.modal');
    if (e.key === 'Escape' && modalContainer.classList.contains('visible')) {
      hideModal();
    }
  });
  //closes when the user clicks outside of the modal window
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer){
      hideModal();
    }
  });

  //appends the children to their parent containers
  modalContainer.appendChild(modal);
  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentHeight);
  modal.appendChild(imageElement);

  modalContainer.classList.add('visible');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//function hides the modal when certain event listeners are triggered (see inside the "showModal" function)
function hideModal(){
  let modalContainer = document.querySelector('.modal');
  modalContainer.classList.remove('visible');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
