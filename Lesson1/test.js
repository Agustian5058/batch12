function convertNumberToRoman(num) {
    const romanMap = ["I","IV","V","IX","X","XL","L","C","CD","D","CM","M"];
    const numeralMap = [1,4,5,9,10,40,50,100,400,500,900,1000];
    
    let length = romanMap.length;
    let result = "";

    while(num > 0) {
       const currentIndex = length-1; // current index = roman.Map.length-1
       const count = parseInt(num / numeralMap[currentIndex]);  // count = parseInt(num / numeralMap[roman.Map.length-1]
        console.log("currentIndex", currentIndex)
        console.log("count", count)
        console.log("numeralMap", numeralMap[currentIndex])
        result = result + romanMap[currentIndex].repeat(count); // result += romanMap[roman.Map.length-1]
        console.log("result", result)    

    num = num % numeralMap[currentIndex];
    console.log("num", num)    
    length--;
    console.log("length", length)   
 }
    return result;
}

console.log (convertNumberToRoman(3459));