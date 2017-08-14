// Script Snippet

function Flip() {
    "use strict";
    var array, num;
    
    array = ['Head', 'Tail'];
    num = Math.floor(Math.random() * 2);
    
    document.getElementById("outPut").innerHTML = array[num];
}