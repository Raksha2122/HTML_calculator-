// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
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
    function Backspace() {
        let screen=document.getElementById("result");
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
