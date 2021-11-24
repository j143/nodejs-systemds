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
console.log(DMLScript.executeScript());
javaLangSystem.out.printlnSync('Hello World');

MLScript = java.import('org.apache.sysds.api.mlcontext.Script');
ml = new MLScript();
var testscript = `
  source("scripts/nn/layers/relu.dml") as relu;
  X = rand(rows=100, cols=10, min=-1, max=1);
  R1 = relu::forward(X);
  R2 = max(X, 0);
  R = sum(R1==R2);
  `;

console.log(ml.execute(dml(testscript)));