import {getArea, getCirc, getVolume, PI} from './indexUtil.js'

console.log(PI);

const cir = getCirc(10);
const area = getArea(10);


console.log(`Circ: ${cir.toFixed(2)}`);


console.log(`Area: ${area.toFixed(2)}`);