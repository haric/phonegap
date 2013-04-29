//
//  CodeScan.js
//
// Created by HC - Apr 21 2013
//
// Copyright 2011-2012 Olivier Louvignes. All rights reserved.
// MIT Licensed

(function(cordova) {
 
 function CodeScan() {}
 
 CodeScan.prototype.scan = function(options, callback) {
 options || (options = {});
 var scope = options.scope || null;

 var config = {}; 
 var _callback = function(result) {
 var buttonValue = false, // value for cancelButton
 buttonIndex = result.buttonIndex;
 if(!config.cancelButtonIndex || buttonIndex != config.cancelButtonIndex) {
 buttonValue = config.items[buttonIndex];
 }
 if(typeof callback == 'function') callback.apply(scope, [buttonValue, buttonIndex]);
 };
 
 return cordova.exec(_callback, _callback, 'CodeScan', 'scan', [config]);
 };
 
 CodeScan.prototype.result = function(callback) {
 cordova.exec(callback, function(err) {
              callback('Nothing to echo.');
              }, "CodeScan", "getResult", []);
 };
 cordova.addConstructor(function() {
                        if(!window.plugins) window.plugins = {};
                        window.plugins.CodeScan = new CodeScan();
                        });
 
 })(window.cordova || window.Cordova);
