/////////////////////////////////////////////////////
////////////////// Array Iteration //////////////////
/////////////////////////////////////////////////////
let list = document.querySelector('#output ul');
let totalBox = document.querySelector('#output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (let i = 0; i < products.length; i++) { // number 2
  // number 3
  let elem = products[i].split(':');
  let name = elem[0];
  let price = Number(elem[1]);
  // number 4
  total += price;
  // number 5
  itemText = name + ': $' + price;
  
  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

/////////////////////////////////////////////////////
////////////////// Array Methods ////////////////////
/////////////////////////////////////////////////////
let list_search = document.querySelector('#search ul');
let searchInput = document.querySelector('#search input');
let searchBtn = document.querySelector('#search button');

list_search.innerHTML = '';

let myHistory = [];

searchBtn.onclick = process_search_click;

function process_search_click() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list_search.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      let listItem = document.createElement('li');
      listItem.textContent = itemText;
      list_search.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}

/////////////////////////////////////////////////////
//////////////////// Selection //////////////////////
/////////////////////////////////////////////////////

let select = document.querySelector('#output_calendar select');
let list_calendar = document.querySelector('#output_calendar ul');
let h1 = document.querySelector('#output_calendar h1');

select.onchange = function () {
  let choice = select.value;

  let days = 31;
  // number 1 - add a conditional statement
  if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
    days = 30;
  } 
  if (choice === 'February') {
    days = 28;
  }
  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list_calendar.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    list_calendar.appendChild(listItem);
  }
}

createCalendar(31,'January');

/////////////////////////////////////////////////////
////////////////// EVENT OBJECTS ////////////////////
/////////////////////////////////////////////////////

let btn = document.querySelector('#change_color button');
let color_div = document.querySelector('#change_color');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

  btn.addEventListener('click', handle_change_color);

function handle_change_color(e) {
  // prevent the default action for the form submit
  e.preventDefault();
  
  let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  color_div.style.backgroundColor = rndCol;
  

  // make the target the object of the style.backgroundColor.
  rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  
}