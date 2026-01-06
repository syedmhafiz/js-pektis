import Club from "./club.js";

function careForMe(strr) {
    let hitMe = 42;
    let punchMe;
    if (hitMe > 30) {
        punchMe = 100;
        console.log("I need a hug");
    }
    return `some ${strr}`;
}

function undef() {
    let some;
    console.log(some);
}



function showDef() {
    // [], {}, () => {} all of these are truthy, but "" is falsy
    if ("") {
        console.log("true");
    } else {
        console.log("false");
    }
}


function doSumthing(str1, str2, golla) {
    const message = golla(str1);
    console.log(message + " " + str2.toUpperCase());
}

doSumthing("thor", "cap", careForMe);



const riley = {
    name: "Riley",
    game: "rdr2",
    age: 25,
    getAge() { // using an arrow function won't work because arrow functions don't have their own this, and uses the global scope this which is never initialized
        return this.name + " " + this.game;
    },
    myMethod() {
        console.log(this);
    }
};

riley.myMethod();


const myClub = new Club("Arsenal", "England");
console.log(myClub);