// testing if Greetr.init has alais G$ and takes Greetr
// as it's prototype
var g = G$('John', 'Doe');
console.log(g);

var h = G$('Jason', 'Doe');
h.greet().greet(true);

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
