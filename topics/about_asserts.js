
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(true === true, 'comparision operator: strictly equal'); //answer: true (only)
});

test("ok", function() {
    ok(1 == true, 'comparision operator:loosely equal'); //answer: 1, true ...
});


test("not ok", function() {
    ok(false === false, 'what is a false value strictly?'); //answer: false (only)
});

test("not ok", function() {
    ok("" == false, 'what is a false value loosely?'); //answer: false,0, ""; Not answer:(undefined, null,NaN)
});



test("equal", function() {
    equal(2, 1 + 1, 'what will satisfy the equal assertion?'); //answer: 2, "2", '2',1+1; Not answer: '1+1', "1+1"
});
