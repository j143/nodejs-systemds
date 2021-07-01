var java = require("java");
var systemds_jar = "systemds-2.1.0.jar";
java.classpath.push(systemds_jar);

// var DMLScript = java.import('org.apache.sysds.api.DMLScript');
var javaLangSystem = java.import('java.lang.System');

javaLangSystem.out.printlnSync('Hello World');
