function evalObject(value){
    console.log("value", value, typeof value)
    console.log("a", value.a, typeof value.a)
    console.log("b", value.b, typeof value.b)
    console.log("operation", value.operation, typeof value.operation)
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b; break;
      case'-': result = value.a - value.b; break;
      case'/': result = value.a / value.b; break;
      case'*': result = value.a * value.b; break;
      case'%': result = value.a % value.b; break;
      case'^': result = Math.pow(value.a, value.b); break;
    }
    return result;
}
let value = {a : 1, b : 1, operation : "+"};
console.log(evalObject({a : 1, b : 1, operation : "+"}))