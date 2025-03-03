const email = "abcasdasd@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(domain);