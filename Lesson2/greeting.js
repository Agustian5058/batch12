function myFunction(time) {
    var greeting;
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else{
        greeting = "Good evening"
    }
    return greeting;
}

console.log(myFunction(21))