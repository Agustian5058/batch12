// Dapatkan jumlah dari 2 array, dan dari masing-masing array. 
// Setiap array hanya mencakup tipe data integer dan hasilnya juga harus integer.
function summary(arr){
    let result = 0;
    for (x of arr) {
        result += x;
    }
    return result;
}
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2, 13]; //output --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];  //output --> 351

let sum = 0;
for(var i=0; i< arr_1.length; i++) {
    sum += arr_1[i]+arr_2[i];
    console.log(sum)
}
console.log(sum)
// arr_1 = summary(arr_1)
// arr_2 = summary(arr_2)
// console.log("arr_1 =", arr_1)
// console.log("arr_2 =", arr_2)
// let result = arr_1 + arr_2;
// console.log("result =", result)
// // Example output: // 276 + 351 = 627