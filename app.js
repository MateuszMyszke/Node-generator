const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Adam', 'Arek', 'Darek', 'Damian', 'Marek', 'Mariusz', 'Tomasz', 'Zbigniew'];
const femaleNames = ['Ania', 'Basia', 'Patrycja', 'Edyta', 'Maja', 'Nina', 'Ewa', 'Celina'];
const lastNames = ['Kowalski', 'Kwiatkoski', 'Kaczynski', 'Rynkowski', 'Rynka', 'Bryczka'];
const people = [];

function randChoice(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

for( i=1; i <= 20; i++){
  let obj={
    gender:'',
    firstName:'',
    lastName:'',
    age: '',
  }

  const renderGender = randChoice(genders);
  obj.gender = renderGender;


  if( obj.gender == 'M'){
    const renderName = randChoice(maleNames);
    obj.firstName = renderName; 

  } else {
    const renderName = randChoice(femaleNames);
    obj.firstName = renderName;
 
  }

  const renderLastName = randChoice(lastNames);
  obj.lastName = renderLastName;

  obj.age = Math.floor(Math.random() * (78 - 18) + 18);
  people.push(obj);
}

let peopleJson = JSON.parse(JSON.stringify(people));
console.log(peopleJson);

const jsonString = JSON.stringify(peopleJson);
fs.writeFile('./people.json', jsonString, err => {
  if(err) {
    console.log('Error writing file', err)
  }else{
    console.log('File created successfully')
  }
});