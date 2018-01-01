(function ( global, $ ) {

    var Greetr = function( firstName, lastName, language ) {
      return new Greetr.init( firstName, lastName, language );
    }

    // variable still within Greetr.init's lexical environment
    // therefore within reach of the Greetr.init function
    var supportedLangs = [ 'en', 'es', '日本語', '中文' ];

    // creating regular and formal greeting objects
    // (to be referenced not as an array but as name/value pairs)
    // (stored as undefined in the memory until called)
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        日本語: 'こんにちわ',
        中文: '你好'
    };

    var formalGreetings = {
      en: 'Greetings',
      es: 'Saludos',
      日本語: '初めまして',
      中文: '您好'
    };

    // To keep track of num of messages yused
    var logMessages = {
      en: 'Logged in',
      es: 'Inició sesión',
      日本語: 'ログインしました',
      中文: '登入了'
    };

    // prototype of Greetr, any methods of this function will go here
    // methonds here will be exposed for users to utilize
    Greetr.prototype = {

      fullName: function() {
          return this.firstName + ' ' + this.lastName;
      },

      // makes sure inputted language is supported
      validate: function() {
          if (supportedLangs.indexOf(this.language) === -1) {
            throw "Invalid Language";
          }
      },

      // Informal greeting method
      greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
      },

      // Formal greeting method
      formalGreeting: function() {
        return formalGreetings[this.language] + ', ' + this.fullName() + '.';
      },

      // rather than typing .greeting or. formalGreeting for every invocation,
      // we're passing a general greet funciton with option to be formal.
      // greet function also makes method chainable
      greet: function(formal) {
        var msg;

        // if undefined or null, it will be coerced to 'false'
        if (formal) {
          msg = this.formalGreeting();
        }
        else {
          msg = this.greeting();
        }
        if (console) {
            console.log(msg);
        }
        // makes method chainable
        // 'this' refers to the calling object at the time of execution
        return this;
      },

      log: function() {
          if (console) {
              console.log(logMessages[this.language] + ': ' + this.fullName());
          }

          return this;
      },

      // makes language changeable on the fly
      setLang: function(lang) {
          this.language = lang;

          this.validate();

          return this;
      }
    };

    Greetr.init = function( firstName, lastName, language ) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    // setting the prototype of Greetr.init to Greetr.protoype so the JavaScript
    // engine will know where to look down the protoype chain
    Greetr.init.prototype = Greetr.prototype;

    // exposing Greetr function (var Greetr) to the global context
    // giving Greetr function an alias of G$
    global.Greetr = global.G$ = Greetr;

}( window, jQuery ));
