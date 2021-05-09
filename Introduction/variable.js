function convertRomanToNumber(num) {
    const romanMap = ["I","IV","V","IX","X","XL","L","C","CD","D","CM","M"];
    const numeralMap = [1,4,5,9,10,40,50,100,400,500,900,1000];
    let result = ""
    for(let i = romanMap.length - 1; i >= 0; i--){ // ngecek romanMap
        if(numeralMap[i] <= num){ // Ngecek nilai num  diatas salah satu angka numeralmap
            if(num < 4 || num < 40 || num < 400 || num < 4000){
                result += romanMap[i].repeat(parseInt(num / numeralMap[i]))
                num -= numeralMap[i] * parseInt(num / numeralMap[i])
            }else{
                result += romanMap[i]
                num -= numeralMap[i]
            }
        }
    }
    return result;
}

console.log(3999, convertRomanToNumber(3999)) //MMMCMLXLIX
// for(let i = 1; i <= 400; i++){
//     console.log(i, convertRomanToNumber(i)) // V
// }