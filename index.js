function run () {
    console.log("Are we done yet?");
};

function receivesAFunction(run) {
    workOutRoutine(run);
}
function workOutRoutine(postLiftingActivity) {
    return postLiftingActivity();
}

function returnsANamedFunction() {
    return function exerciseRoutine() {
    console.log("This is the exercise routine function");
    };
} 

function returnsAnAnonymousFunction() {
    return function () {
    return "This is an anonymous";
    };
}
