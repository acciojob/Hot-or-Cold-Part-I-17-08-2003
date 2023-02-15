//your code here
var btn=document.getElementById("btn");
var numPtag = document.getElementById("num");
var res=document.getElementById("respond");
var inputvalue = document.getElementById("guess").value;

function randomnumbergenrator{}{
	randomnum =Math.floor(Math.random() +41) -20;
	guessNum();
	print();
	
}
function guessnum(){
	input =Number(document.getElementById("guess").value);
}
function print(){
	if (Math.abs(randomNum-input)<=5){
		document.getElementById("respond").innerText ="Hot";
		
	}else{
		document.getElementById("respond").innerHTML="cold";
	}
	
}
btn.addEventListener("click", randomnumbergenrator);
