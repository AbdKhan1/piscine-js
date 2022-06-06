const clone1 = structuredClone(person);
Object.freeze(clone1.age, clone1.name, clone1.country)
const clone2 = structuredClone(person);
Object.freeze(clone2.age, clone2.name, clone2.country)
const samePerson = structuredClone(person);

person.age + 1 
person.country = 'FR'
