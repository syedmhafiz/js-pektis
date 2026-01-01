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
