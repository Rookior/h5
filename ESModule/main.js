import { name, age } from "./moduleA.js";
console.log(name, age);
import * as moduleA from "./moduleA.js";
console.log(moduleA)
moduleA.sayHello('world')