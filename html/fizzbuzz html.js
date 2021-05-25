// JavaScript source code
var Value = 1;
while (Value < 21) {
    if((Value % 3) == 0 && (Value % 5) == 0){
    document.write("FizzBuzz,");
    }
    else if((Value % 3) == 0){
    document.write("Fizz,");
    }
    else if((Value % 5) == 0){
    document.write("Buzz,");
    }
    else{
    document.write(Value);
    document.write(",");
        }
    Value = ++Value;
}