document.querySelector('button').addEventListener('click', randomplus);

function randomplus() {
  let drinkName = document.querySelector('input').value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then((res) => res.json())
    .then((data) => {
      const drinks = data.drinks;

      if (drinks) {
        console.log(drinks);
        const firstDrink = drinks[0];
        document.querySelector('h2').innerText = firstDrink.strDrink;
        document.querySelector('img').src = firstDrink.strDrinkThumb;
        document.querySelector('h3').innerText = firstDrink.strInstructions;
      } else {
        alert('No drinks found for the entered name!!!');
        // Handle the case where no drinks match the entered name.
        // You can clear previous results or display an error message here.
        document.querySelector('h2').innerText = '';
        document.querySelector('img').src = '';
        document.querySelector('h3').innerText = '';
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}
