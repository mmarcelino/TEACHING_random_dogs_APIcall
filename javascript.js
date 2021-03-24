// storing the path to the 'Random Dogs API' in a variable
const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
// selectin the random-dogs class
const randomDogsElement = document.querySelector('.random-dogs');
// selecting the button class
const button = document.querySelector('.go-button');


async function getRandomDogs() {
  //clearing the content of the .random.dogs class every time we call the function
  randomDogsElement.innerHTML = '';
  //sending a GET request to the API URL and storing the response in a variable
  const response = await fetch(API_URL);
  //parsing the response as json and storing it in a variable
  const json = await response.json();
  //getting the 'message' property from the object returned by the API, which stores
  //an array of images and iterating over each image + adding the necessary html
  //structure around them to build the bulma grid
  json.message.forEach(dogImage => {
    randomDogsElement.innerHTML += `
    <div class="column">
      <div class="card">
        <img src="${dogImage}" alt="A dog image">
      </div>
    </div>
    `;
  });
}

//activating the function above when clicking the button
button.addEventListener('click', getRandomDogs);


//NOTES:
//- making the API request in an asynchronous process, hence the "async"
//- also, hence the 'wait' -> we have to wait for the promise to be returned
//- promise -> an object that may produce a single value some time in the future:
//             either a resolved value, or a reason that it's not resolved
//             (e.g., a network error occurred)
