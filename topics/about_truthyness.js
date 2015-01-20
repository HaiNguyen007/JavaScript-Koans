
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
    equal(false, zeroIsTruthy, 'is 0 truthy?'); //0,false,"",!!undefined,!!NaN!,!1,... 
	//(Not: undefined, NaN, null vì equal() là strictly equal)
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equal(false, nullIsTruthy, 'is null truthy?'); //false,0,"",!!null,!"abc",...
	//(Not:null,undefined,)
});
