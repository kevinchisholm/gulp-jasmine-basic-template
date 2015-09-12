(function(){
    'use strict';

    /*global describe: false */
    /*global it: false */
    /*global expect: false */
    /*global require: false */

    var myObject = require('../src/js/myScript.js');

    describe('myObject', function(){
        describe('Testing methods', function(){
            describe('getTrue', function(){
                it('It is a function', function(){
                    expect(myObject.getTrue instanceof Function).toEqual(true);
                });
                it('it returns true', function(){
                    expect(myObject.getTrue()).toEqual(true);
                });
            });
            describe('getFalse', function(){
                it('It is a function', function(){
                    expect(myObject.getTrue instanceof Function).toEqual(true);
                });
                it('it returns true', function(){
                    expect(myObject.getFalse()).toEqual(false);
                });
            });
        });
    });
})();