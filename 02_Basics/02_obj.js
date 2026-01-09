
const mySym = Symbol("key1")

const JsUser = {
    name: "Riken",
    "full name": "Riken Patel",
    [mySym]: "mykey1",
    age: 18,
    location: "Barrie",
    email: "rikenincanada@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

Object.freeze(JsUser) // Will make this immutable