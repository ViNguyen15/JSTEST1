// action items for test
// you must create dynamic object (using class)
// create button that when click creates a page form (like a popup page)
// form must have 3 fields (hint: input) that would take in user's name, age, place
// create submit button on the form that when clicked would create an object base on the fields and 
// adds the object into the existing array (card) and
// the form will disappear letting user see the update


/**
 * name: Derek
 * date: 2/20/2023
 * 
 */
let cardList = [
  {
     age: 2,
     place: "1st",
     name: "Mochi" 
  },

  {
      age: 16,
      place: "2nd",
      name: "Derek" 
   },

   {
    age: 999999999999,
    place: "3rd",
    name: "Jimmay"
   },

   {
    age: 6,
    place: "4th",
    name: "Whiskey" 
 }
];

function webPage(){

  for(let i = 0; i < cardList.length; i++){
      document.getElementById("bigBox").innerHTML += `
      <div class="card">
          <div class="age">${cardList[i].age}</div>
          <div class="place">${cardList[i].place}</div>
          <div class="name">${cardList[i].name}</div>
      </div>
  `;
  }

}


webPage();
