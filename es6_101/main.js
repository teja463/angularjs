"use strict"
console.log('Hello World!!');


// Let and Var demo

function varTest() {
    var a = 30;

    if (true) {
        var a = 50;
        console.log(a);
    }

    console.log(a);
}

varTest();

function letTest() {
    let a = 40;

    if (true) {
        let a = 60;
        console.log(a);
    }

    console.log(a);
}

letTest();


// Classes Demo

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // We can define static methods like this and we can invoke them directly like User.userCounter();
    // We don't need to create an object and invoke this like new User().userCounter();
    static userCounter() {
        console.log("There are 40 users");
    }

    sayHello() {
        console.log(this.name + " Says Hello...");
    }
}

// Inheritacne

class AdminUser extends User {
    constructor(name, email, privileges) {
        super(name, email);
        this.privileges = privileges;
    }

    getPrivileges() {
        console.log(this.name + " has these privileges " + this.privileges);
    }
}

let teja = new User("Teja P", "teja463@gmail.com");
teja.sayHello();
User.userCounter();

let pramod = new AdminUser("Pramod", "pramodrajbharath@gmail.com", ["Edit", "Delete"]);
pramod.sayHello();
pramod.getPrivileges();


// String templates demo

let name="Teja";

function convertToUpper(word){
    return word.toUpperCase();
}

let template = `
    <h3>This is a test template created by ${name} ${convertToUpper("test")} </h3>
`
document.getElementById("template").innerHTML = template;

// Default parameter demo

function defaultTest(name, email="teja463@gmail.com"){
    console.log(`name ${name}`);
    console.log(`email ${email}`);
}

defaultTest("Teja");

// Set

let myArray = [1,1,2,2,3,4,56];

let mySet = new Set(myArray);

console.log("set.. ");
console.log(mySet);
console.log(mySet.size);

mySet.add("10");
mySet.add({"a":1});

mySet.delete(2);

console.log(mySet);

mySet.forEach(function(val1, val2){
    console.log(val2);
});

// Map

let myMap = new Map([["key1", "value1"], ["key2", "value2"]]);
console.log(myMap);

myMap.set("key3", "value3");
console.log(myMap);

myMap.delete("key1");
console.log(myMap);

console.log(myMap.size);

// WeakSet

// WeakSet is for objects

let weakSet  = new WeakSet();

weakSet.add({"k1":"v1"});
console.log(weakSet);

// WeakMap similarly weakmap

// Arrow functions

let add = (a,b) => {
    console.log(a+b);
};

add(12,3);