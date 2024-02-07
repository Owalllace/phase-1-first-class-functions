function run() {
    console.log("Are we done yet?");
}
function receivesAFunction() {
    workOutRoutine(run);
}
function workOutRoutine(postLiftingActivity) {
    postLiftingActivity();
}
receivesAFunction();

function receivesAFunction() {
    return workOutRoutine(run);
}

function returnsAnAnonymousFunction() {
    return function () {
    console.log("This is an anonymous");
    };
}
