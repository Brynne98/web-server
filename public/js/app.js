console.log("Client side server has loaded");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    messageThree.textContent = '';
    messageFour.textContent = '';

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error)
                messageOne.textContent = data.error;
            } else {
                console.log(data)
                messageOne.textContent = data.location.toUpperCase();
                messageTwo.textContent = data.foreCast.description;
                messageThree.textContent = "Current Temperature: " + data.foreCast.temperature;
                messageFour.textContent = "Feels Like: " + data.foreCast.feelsLike;
            }
        })
    })
})