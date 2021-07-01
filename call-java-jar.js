var java = require("java");
var fs = require("fs");
var systemds_jar = "systemds-2.1.0.jar";
java.classpath.push(systemds_jar);
var depDir = "./systemds-lib";
var dependencies = fs.readdirSync(depDir);
 
dependencies.forEach(function(dependency){
    java.classpath.push(depDir + "/" + dependency);
})


var DMLScript = java.import('org.apache.sysds.api.DMLScript');
var javaLangSystem = java.import('java.lang.System');
// DMLScript.execute();
javaLangSystem.out.printlnSync('Hello World');
