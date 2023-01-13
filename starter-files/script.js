// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
let button = document.getElementById("button");
let answer = document.getElementById("answer");

function fetchAnswer(){
    fetch (API_ENDPOINT);
    return Response(API_ENDPOINT);
    answer.insertAdjacentHTML (Response)
};
button.addEventListener("click", fetchAnswer())