function calc(){
	console.log("call function calc")
var x = parseFloat(document.getElementById("x").value);
var x1 = parseFloat(document.getElementById("x1").value);
var x2 = parseFloat(document.getElementById("x2").value);
var y1 = parseFloat(document.getElementById("y1").value);
var y2 = parseFloat(document.getElementById("y2").value);
var v1 = x - x1;
var v2 = y2 - y1;
var v3 = x2 - x1;
var v4 = v1 * v2;
var v5 = v4 / v3;
var y = v5 + y1;
	console.log(y)
document.getElementById("result").value = parseFloat(y).toFixed(0);
}