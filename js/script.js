/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


// Select the header class from the index file

let searchArea = document.querySelector('.header');

// Creates the HTML elements for search input and button

let searchButton = `
   <label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;



// Dynamically insert search input and button

searchArea.insertAdjacentHTML("beforeend", searchButton);

// Got the below 'keyup' event listener to work. This lets a user type in a letter and immidiately starts to filter out all students based on the letter typed into search input and the letter that their name starts with.

search.addEventListener('keyup', (e) => {
   const searchInput = e.target.value.toLowerCase();
   let searchResults = [];

   for ( let i = 0; i < data.length; i++ ) {
      const studentName = `${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;

      if (studentName.includes(searchInput)) {
         searchResults.push(data[i]);
      }
   };
   showPage(searchResults, 1);
   addPagination(searchResults);
});

// click event listener is below. This lets a user click the magnifying glass button next to the search input to then submit the name typed into search.
let searchButtonIcon = searchArea.querySelector('button[type="button"]');

searchButtonIcon.addEventListener('click', (e) => {
   const input = searchArea.querySelector('input#search');
   const searchInput = input.value.toLowerCase();
   let searchResults = [];

   for ( let i = 0; i < data.length; i++ ) {
      const studentName = `${data[i].name.title.toLowerCase()} ${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;

      if (studentName.includes(searchInput)) {
         searchResults.push(data[i]);
      } 
   };
   showPage(searchResults, 1);
   addPagination(searchResults);
});

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students. This function also includes an if statement to help
throw a "no results" message if the list.length is 0, meaning that no students match the letter/name a user has typed in.
*/

function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   if (list.length > 0) {
      for (let i = 0; i < list.length; i++) {
         if (i >= startIndex && i < endIndex) {
               studentList.insertAdjacentHTML("beforeend", `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
                     <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
                     <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined ${list[i].registered.date}</span>
                  </div>
               </li>
               `);
         }
      }
   } else {
      studentList.insertAdjacentHTML("beforeend", `<li class="student-item cf"><h3>Sorry, no results</h3></li>`)
   };
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / 9);

  // select the element with a class of `link-list` and assign it to a variable
  let pageButtons = document.querySelector('.link-list');

  // set the innerHTML property of the variable you just created to an empty string
  pageButtons.innerHTML = '';

  // loop over the number of pages needed
  for ( let i = 0; i < numOfPages.valueOf(); i++ ) {
   pageButtons.insertAdjacentHTML("beforeend", `<li><button type="button">${i + 1}</button></li>`);
   let firstButton = document.querySelector('ul.link-list li:first-child button');
   firstButton.className = 'active';
  }

  // create an event listener on the `link-list` element

  pageButtons.addEventListener('click', (e) => {
   if ( e.target.tagName == "BUTTON") {
      pageButtons.querySelector('.active').className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
   }
  });
};

// Call functions

showPage(data, 1);

addPagination(data);


