var amount = 28.60;
var total = 87;
var percentage = (amount / total) * 100;
percentage = Math.round((percentage + Number.EPSILON) * 100) / 100;


var outof = document.getElementById("outof");
var bar = document.getElementById("bar");

var outof_text = "$" + amount + " / " + "$" + total + " (" + percentage + "%)";
outof.innerHTML = outof_text;

var percent = "width: " + percentage + "%;";
bar.setAttribute("style", percent);
