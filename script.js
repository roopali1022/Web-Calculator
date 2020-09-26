function calculate() {
    value1 = parseInt(document.getElementById("value1").value);
    value2 = parseInt(document.getElementById("value2").value);
    document.getElementById("answer").innerHTML = operate(value1, value2);
}
function operate(value1,value2)
{
    var operator = document.getElementById("operator").value;
    if (operator == '+')
     {
        return value1 + value2;
    } 
    else if (operator == '-') 
    {
        return value1 - value2;
    } else if (operator == '*') 
    {
        return value1 * value2;
    } else if (operator == '/')
     {
        return value1 / value2;
    }
}