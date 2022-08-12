import { name, age } from "./moduleA.js";
console.log(name, age);
import * as moduleA from "./moduleA.js";
console.log(moduleA,moduleA.name,moduleA.age)
moduleA.sayHello('world')

import * as moduleB from "./moduleB.js";
console.log(moduleB.default.sex)

