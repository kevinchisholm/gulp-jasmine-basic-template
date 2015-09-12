'use strict';

/*global module: false */

var myObject = {};

myObject.getTrue = function(){
    return true;
};

myObject.getFalse = function(){
    return false;
};

module.exports = myObject;