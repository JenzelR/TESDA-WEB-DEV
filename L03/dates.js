
let val;

const today = new Date();
let birthday =  new Date('02-26-1999 12:34:56');
birthday = new Date('February 26 1999');
birthday = new Date('02-26-99');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(0);
birthday.setDate(07);
birthday.setFullYear(1999);
birthday.setHours(11);
birthday.setMinutes(23);
birthday.setSeconds(56);

console.log(birthday);
