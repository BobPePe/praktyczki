function handleCalculatorForm(form){
    console.log(form);
    let toDisplay = form.inputbox.value;
    let toDisplay1 = form.inputbox1.value;
    let operation = form.choose.value;

    document.getElementById("calcResult").innerHTML = calculate(toDisplay, toDisplay1, operation);
}

function calculate(var1, var2, op){
    var1 = parseFloat(var1);
    var2 = parseFloat(var2);

    switch(op)
    {
        case "+":
            return var1 + var2;
        case "-":
            return var1 - var2;
        case "*":
            return var1 * var2;
        case "/":
            if(var2 == 0)
                {
                return "Dzielenie przez zero";
                }
            else
                {
                    return var1/var2;
                } 
    }
}


function handlePalindromeForm(form){
    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}


function palindrome(text){
    let arr = text.split('');
    let reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--)
    {
        reversedArr.push(arr[i]);
    }
    let ex = arr.toString();
    let ans = reversedArr.toString();

    if(ex === ans) return "palindrom";
    else return "nie palindrom";

}

function zad3(){
    let numberArray = [12,7,9,8,69,213];
    let textArray = ["masło","maselnica","wieś","śmeitanka"];
    console.log(stolenBubbleSort(numberArray));
    console.log(stolenTextBubbleSort(textArray));
}

function stolenBubbleSort(array){
    let list = array;
    for(let i = 0; i <= list.length; i++)
    {
        for(let j = 0; j < list.length; j++){
            if(list[j] > list[j+1])
            {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    let a = list.length;
    return list[a-2];
}

function stolenTextBubbleSort(array){
    let list = array;
    for (let i = 0; i < list.length; i++)
    {
        for (let j = 0; j < list.length - i - 1; j++){
            if(list[j].length > list[j+1].length)
            {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    let a = list.length;
    return list[a-2];
}

function range(a,b){
    console.log(a)
        if(a < b)
            range(a+1, b)
}
function zad4(){
    range(8,11);
    range(1,5);
}