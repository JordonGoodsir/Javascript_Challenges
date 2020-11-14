 f = (input) => {
    var a = input;

    if (a % 2 == 1) {
        console.log("Immediately inside If : " + a)
        var a = input + 1;
        console.log("Inside if - after var a re-declaration : scope local: " + a);
    }

    console.log("Inside function - scope global: " + a);
}

f(11)