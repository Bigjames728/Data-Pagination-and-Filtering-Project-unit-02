/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
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



// // Search function (redo)
// function searchNames (searchInput, list) {
//    let studentArr = [];
//     for ( let i = 0; i < list.length; i++ ) {
//       if ( searchInput.value.length != 0 && list[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
//          studentArr.push(data[i]);
//          showPage(studentArr, data);
//          addPagination(studentArr);
//       }

//     }


// };


// // Defining error function

// function error() {


// }

// Got the below 'keyup' event listener to work

search.addEventListener('keyup', (e) => {
   const searchInput = e.target.value.toLowerCase();
   let searchResults = [];

   for ( let i = 0; i < data.length; i++ ) {
      const studentName = `${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;

      if (studentName.includes(searchInput)) {
         searchResults.push(data[i]);
         
      // } else if (searchResults.length === 0) {
      //    error(searchInput);
      //    addPagination(searchResults);
      }
   };
   showPage(searchResults, 1);
   addPagination(searchResults);
});

// can't get the 'click' event listener to work
// let searchButtonIcon = searchArea.querySelector('button[type="button"]');


// searchButtonIcon.addEventListener('click', (e) => {
//    const input = searchArea.querySelector('input#search');
//    const searchInput = input.value.toLowerCase();
//    let searchResults = [];

//    for ( let i = 0; i < data.length; i++ ) {
//       const studentName = `${data[i].name.title.toLowerCase()} ${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;

//       if (studentName.includes(searchInput)) {
//          searchResults.push(data[i]);
//          showPage(searchResults, 1);
//          addPagination(searchResults);
//       } 

//    };

   

// });






/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
// tried to add the "no results" message below, it isn't working yet.
   // for ( let i = 0; i < list.length; i++) {
   //    if (list.length > 0) {
   //       studentList.innerHTML += `
   //       <li class="student-item cf">
   //          <div class="student-details">
   //             <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
   //             <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
   //             <span class="email">${list[i].email}</span>
   //          </div>
   //          <div class="joined-details">
   //             <span class="date">Joined ${list[i].registered.date}</span>
   //          </div>
   //       </li>
   //       `;
   //    } else {
   //       studentList.innerHTMl += `There are no students that match this name.`
   //    }
     
      
   // } 

 
   // // Looping through the list argument to obtain data and adding HTML elements for each student listing. This will show 9 students on the page.
   // for ( let i = 0; i < list.length; i++) {
   //    if (i >= startIndex && i < endIndex) {
   //       studentList.innerHTML += `
   //       <li class="student-item cf">
   //          <div class="student-details">
   //             <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
   //             <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
   //             <span class="email">${list[i].email}</span>
   //          </div>
   //          <div class="joined-details">
   //             <span class="date">Joined ${list[i].registered.date}</span>
   //          </div>
   //       </li>
   //       `;
   //    }
     
      
   // } 
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
    // create the elements needed to display the pagination button
    // insert the above elements

  // give the first pagination button a class of "active"
  



  // create an event listener on the `link-list` element

  pageButtons.addEventListener('click', (e) => {
   if ( e.target.tagName == "BUTTON") {
      pageButtons.querySelector('.active').className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
   }

  });
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments
};





showPage(data, 1);

addPagination(data);

// searchNames(search, data);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
