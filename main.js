function careForMe() {
    let hitMe = 42;
    let punchMe;
    if (hitMe > 30) {
        punchMe = 100;
        console.log("I need a hug");
    }
    console.log(punchMe);
}

careForMe();

function undef() {
    let some;
    console.log(some);
}

undef();


function showDef() {
    // [], {}, () => {} all of these are truthy, but "" is falsy
    if ("") {
        console.log("true");
    } else {
        console.log("false");
    }
}

showDef();
