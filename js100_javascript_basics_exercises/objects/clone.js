function clone(obj) {
  let resultObj = {};
  Object.assign(resultObj, obj);
  return resultObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33