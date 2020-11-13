/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   // Looping through the list argument to obtain data and adding HTML elements for each student listing. This will show 9 students on the page.
   for ( let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList.innerHTML += `
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
         `;
      }
     
      
   } 
   
}

function addPagination (list) {
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / 9);

  // select the element with a class of `link-list` and assign it to a variable
  let pageButtons = document.querySelector('.link-list');

  // set the innerHTML property of the variable you just created to an empty string
  pageButtons.innerHTML = '';

  // loop over the number of pages needed
  for ( let i = 0; i <= numOfPages.valueOf(); i++ ) {
   pageButtons.insertAdjacentHTML("beforeend", `<li><button type="button">${i + 1}</button></li>`);
   let firstButton = document.querySelector('ul.link-list li:first-child button');
   firstButton.className = 'active';


  }
    // create the elements needed to display the pagination button
    // insert the above elements

  // give the first pagination button a class of "active"
  

  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments
};





showPage(data, 1);

addPagination(data);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions