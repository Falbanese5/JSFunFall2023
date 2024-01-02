(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

  const dropdown = document.querySelector("#dropdown");
  let characters;

  axios
  ({
    method: "GET",
    url: "https://rickandmortyapi.com/api/character/",
  })
  .then((response) => 
  {
    characters = response.data.results;
    characters.forEach((character) => 
    {
      const option = document.createElement("option");
      option.value = character.id; // I'm going to use this when I lookup when character the user selects
      option.textContent = character.name;
      dropdown.appendChild(option);
    });

    dropdown.addEventListener("change", (event) => 
    {
      const id = parseInt(event.target.value);

      const character = characters.find((character) => 
      {
        return character.id == id;
      });

      document.querySelector("#title-head").textContent = character.name;
      document.querySelector("#get-schwifty").src = character.image;
    });
  })
  .catch((error) => 
  {
    // Usually, you should display an error message on the screen inside of doing console.error
    console.error(error);
  });
})();
