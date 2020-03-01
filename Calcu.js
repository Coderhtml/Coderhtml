function myfunction(n) {
	document.getElementById("display").value += n;
}

function equalsbtn(){
	document.getElementById("display").value = eval(document.getElementById("display").value);
}

function ac(){
	display();
	document.getElementById("display").value = "";
}

function deletebtn(){
	var value = document.getElementById("display").value;
	document.getElementById("display").value = value.substring(0, value.length - 1);
}

function display(){
	 document.getElementById("history").value = document.getElementById("display").value;
}