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
 */

class CardCreation{
  age;
  place;
  name;
    constructor(userAge, userPlace, userName){
      this.age = userAge;
      this.place = userPlace;
      this.name = userName;
    }
  }



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

   new CardCreation(10000, "3rd", "Diablo"),
   
   2
];



function webPage(){

  document.getElementById("bigBox").innerHTML = ``;

  for(let i = 0; i < cardList.length; i++){
      document.getElementById("bigBox").innerHTML += `
      <div class="card">
          <div class="age">${cardList[i].age}</div>
          <div class="place">${cardList[i].place}</div>
          <div class="name">${cardList[i].name}</div>
      </div>
  `;
  }

  document.getElementById("bigBox").innerHTML += `
    <button id="button" onclick="formCreation()">+</button>
  `;

}

function formCreation(){
  document.getElementById("bigBox").innerHTML += `
  <div id="formBox">
    <div>
      <button id="formButton" onclick="webPage()">X</button>
    </div>
    <div id="formDiv">
      <div id="formAge">Age:<input type="number" id="userAge"></div>
      <div id="formPlace">Place:<input type="text" id="userPlace"></div>
      <div id="formName">Name:<input type="text" id="userName"></div>
      <button onclick="pushToArray()">Submit</button>
    </div>
    
  </div>

  
  `;
}

function pushToArray(){

  // cardList.push(userAge.value);
  
  let age = document.getElementById("userAge").value;
  let place = document.getElementById("userPlace").value;
  let name = document.getElementById("userName").value;

  cardList.push(new CardCreation(age, place, name));
  webPage();
}


webPage();