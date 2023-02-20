// action items for test
// you must create dynamic object (using class)
// create button that when click creates a page form (like a popup page)
// form must have 3 fields (hint: input) that would take in user's name, age, place
// create submit button on the form that when clicked would create an object base on the fields and adds the object into the existing array (card)


/**
 * name: *
 * date: *
 * on completion of this test user would be ready for general motors next test
 * please submit record and commits as well as latest resume on gm career site for evaluation: https://generalmotors.wd5.myworkdayjobs.com/Careers_GM/login?redirect=%2FCareers_GM%2Fjob%2FConcord-North-Carolina-United-States-of-America%2FSoftware-Developer----Motorsports_JR-202302735%2Fapply
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
      name: "Deric" 
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