function rdmaturity(){
	var rate=document.getElementById('rate').value;
	var ci=document.getElementById('ci').value;
	var time=document.getElementById('time').value;
	var irate=rate/ci;var mv=document.getElementById('mv').value;
	var year=time/12;
	document.getElementById('mv').value=(document.getElementById('principal').value*(Math.pow((1+ irate/100),(year)*ci)-1)/(1-Math.pow((1+irate/100),-ci/12))).toFixed(2);
}