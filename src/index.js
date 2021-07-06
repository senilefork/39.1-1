import { choice, remove } from './helpers'
import { fruits } from './foods.js'

let fruit = choice(fruits);



console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious, may I have another?');

remove(fruits, fruit);

console.log(`I'm sorry, these are the only fruits we have left: ${fruits.length}`)
