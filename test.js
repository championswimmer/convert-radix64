/**
 * Created by championswimmer on 25/11/16.
 */

const r = require('./index.js');

console.log('Test');
console.log(r.to64(0));
console.log(r.to64(63));
console.log(r.to64(64));
console.log(r.to64(65));
console.log(r.to64(100));

console.log(r.from64("1"));
console.log(r.from64("11"));
console.log(r.from64("AB"));
console.log(r.from64("2bA"));
