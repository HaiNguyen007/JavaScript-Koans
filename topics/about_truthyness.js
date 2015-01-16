
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    equal(true, oneIsTruthy, 'is one truthy?'); //true, 1, "1", +1, !null, !undefined, !0, !NaN,!"",!false |Not (2)
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    equal(true, negativeOneIsTruthy, 'is -1 truthy?'); //true, 1, "1", +1, !null, !undefined, !0, !NaN,!"",!false |Not (2)
	});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    equal(__, zeroIsTruthy, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equal(__, nullIsTruthy, 'is null truthy?');
});
