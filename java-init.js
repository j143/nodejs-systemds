"use strict";
var fs = require("fs");
var java = require("java");
var baseDir = "./target/dependency";
var dependencies = fs.readdirSync(baseDir);
 
dependencies.forEach(function(dependency){
    java.classpath.push(baseDir + "/" + dependency);
})
 
java.classpath.push("./target/classes");
java.classpath.push("./target/test-classes");
 
exports.getJavaInstance = function() {
    return java;
}
