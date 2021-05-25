// JavaScript source code
var Value = 1;
while (Value < 21) {
    if((Value % 3) == 0 && (Value % 5) == 0){
    console.log("FizzBuzz");
    }
    else if((Value % 3) == 0){
    console.log("Fizz");
    }
    else if((Value % 5) == 0){
    console.log("Buzz");
    }
    else{
    console.log(Value);
        }
    Value = ++Value;
}