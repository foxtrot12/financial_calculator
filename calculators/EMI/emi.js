function myfun()
{
    
   var loan = document.getElementById('loan').value;
   var roi = document.getElementById('roi').value;
   var term = document.getElementById('term').value;
   
   var P=loan;
    var R=((roi)/12)/100;
   var N=term*12;
   var EMI=(P * R * (1+R)**N) / (((1+R)**N)-1);
   EMI=Math.round(EMI);
   if(EMI!=Infinity)
   document.getElementById("emi").innerHTML=EMI;
   

}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}