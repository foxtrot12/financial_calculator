 
    function calculate()
    {
        var investment = document.getElementById("num1").value; //principal amount
        var annualRate = document.getElementById("num2").value; 
        var monthlyRate = annualRate / 12 / 100;  //Rate of interest
        var years = document.getElementById("num3").value; 
        var months = years * 12;  //Time period 
        var futureValue = 0; //Final Value
        var amount = 0;
        var est = 0 ;

 
        futureValue=(investment * (1+monthlyRate) * ((Math.pow((1+monthlyRate),months)) - 1)/monthlyRate);

        amount = investment * months;
        
        est = futureValue - amount;
        if(!isNaN(futureValue))
        {
            document.getElementById("namees").innerHTML="Your Result";
            document.getElementById("answer").innerHTML="Total value = "+futureValue.toFixed(2);
            document.getElementById("answer2").innerHTML="Invested Amount = "+amount;
            document.getElementById("answer3").innerHTML="Expected Return = "+est.toFixed(2);
            
        }
    }

    function calculate1()
    {
        var sum_assured = document.getElementById("sum").value;
        var bonus_per = document.getElementById("bonus").value;
        var terms = document.getElementById("term").value;
        var fab_rate = document.getElementById("fab").value;

        var bonus_cal;
        var final_bonus;
        var sum;
        
        bonus_cal = sum_assured * (bonus_per/1000) *terms;
        final_bonus = sum_assured * (fab_rate/1000);
        sum = parseInt(sum_assured) + parseInt(bonus_cal) + parseInt(final_bonus);

        if(!isNaN(final_bonus))
        {
            document.getElementById("namees").innerHTML="Your Result";
            document.getElementById("answer").innerHTML="Bonus  = "+bonus_cal;
            document.getElementById("answer2").innerHTML="Final Additional bonous = "+final_bonus;
            document.getElementById("answer3").innerHTML="Total maturity = "+sum;
            
        }



    }