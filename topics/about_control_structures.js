module("About Control Structures (topics/about_control_structures.js)");

test("if", function() {
	var isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	equal(true, isPositive,  'what is the value of isPositive?'); //true,!!1,!"",!null,...
});

test("for", function() {
	var counter = 10;
	for (var i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equal(16, counter, 'what is the value of counter?'); //16
});

test("for in", function() {
	// this syntax will be explained in about objects
	var person = {
		name: "Amory Blaine",
		age: 102
	};
	var result = "";
	// for in enumerates the property names of an object
	for (var property_name in person) {
  		result = result + property_name;
	};
	equal("nameage", result, 'what is the value of result?'); //"nameage",'nameage'
});

test("ternary operator", function() {
	var fruit = true ? "apple" : "orange"; //"apple"
	equal("apple", fruit, 'what is the value of fruit?');//"apple"

	fruit = false ? "apple" : "orange";
	equal("orange", fruit, 'now what is the value of fruit?'); //"orange"
});

test("switch", function() {
	var result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equal(2, result, 'what is the value of result?'); //2
});

test("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    equal("Merry", result, 'what is the value of result?'); //"Merry"
});

test("null coalescing", function() {
    var result = null || "a value";
    equal("a value", result, 'what is the value of result?'); //"a value"
});
