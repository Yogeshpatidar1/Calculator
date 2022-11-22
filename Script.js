// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 function back(){
    var a = document.getElementById("result").value;
    document.getElementById("result").value = a.substring(0,a.length-1);
 }
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
