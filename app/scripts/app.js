/*global define */
define(['jquery'], function ( $ ) {
  'use strict';

  var nSigns = 0;
  var addSign = function( message ) {
    $('#guesses').prepend('<li style="z-index: ' + nSigns + '"><span>' + message  + '<div class="vine-left"><div class="stalk"></div><div class="leaf1"></div><div class="leaf2"></div><div class="leaf3"></div></div> <div class="vine-right"> <div class="stalk"></div> <div class="leaf1"></div> <div class="leaf2"></div> <div class="leaf3"></div> </div> </span></li>');
    nSigns++;
  };

  var randNum = Math.ceil( Math.random() * 100 );

  var processNumber = function( n ) {
    n = parseInt( n, 10 );
    if( n === randNum ) {
      return 'You got it!';
    } else if( n < randNum ) {
      return n + ' is too low!';
    } else if( n > randNum ) {
      return n + ' is too high!';
    } else {
      return 'That\'s...not a number.';
    }
  };

  var checkNumber = function( n ) {
    addSign( processNumber( n ) );
    $('#guess').select();
  };

  $(function() {
    $('#guess')
    .click(function() { $(this).select(); })
    .keypress(function(e) {
      var code = e.keyCode ? e.keyCode : e.which;
      if( code === 13 ) {
        checkNumber( e.target.value );
      }
    });

    $('#submit')
    .click(function() {
      checkNumber( $('#guess').val() );
    });

    addSign( 'It is between 1 and 100' );
  });

  return 'I\'m an app.';
});

