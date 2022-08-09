// Using the querySelector method I gathered the needed elements
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const container = document.querySelector('.container');

// Adding a click event listener to the openBtn element which will 
// add the show-nav class to the container 
openBtn.addEventListener('click', () => container.classList.add('show-nav'));

// Adding a click event listener to the closeBtn element which will 
// remove the show-nav class from the container 
closeBtn.addEventListener('click', () => container.classList.remove('show-nav'));