// using jQuery to add click even to Login button
// should login and greet User with selected language
$('#login').click(function() {

    var loginGrtr = G$('John', 'Doe');

    // after login button is clicked, hide the 'login' screen
    $('#logindiv').hide();

    // setting language here to show chainable methods
    // then invokes HTMLGreeting method and passing that on to '#greeting' which is
    // an header on our index.html page
    // finally logs action to console
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});


// testing if Greetr.init has alais G$ and takes Greetr
// as it's prototype
var g = G$('John', 'Doe');
console.log(g);

var h = G$('Jason', 'Doe');
h.greet().greet(true).log();

// Spanish with on-the-fly chain
var s = G$('Jane', 'Doe');
s.greet().setLang('es').greet(true);

// Japanese with on-the-fly chain
var j = G$('Sarah', 'Smith');
j.greet().setLang('日本語').greet(true);

// Spanish with on-the-fly chain
var c = G$('Charlie', 'Smith');
c.greet().setLang('中文').greet(true);

// Trying to switch languages with an invalid language
var i = G$('Jerry', 'Doe');
i.greet().setLang('fr').greet(true);
