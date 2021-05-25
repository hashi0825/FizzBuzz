// JavaScript source code
var Value = 1;
while (Value < 21) {
    if((Value % 3) == 0 && (Value % 5) == 0){
    window.alert("FizzBuzz");
    }
    else if((Value % 3) == 0){
    window.alert("Fizz");
    }
    else if((Value % 5) == 0){
    window.alert("Buzz");
    }
    else{
    window.alert(Value);
        }
    Value = ++Value;
}