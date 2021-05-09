var arr = ["Nama", "Saya", "Roro", "Kartika"]
var x = "Array"
console.log(arr)
console.log(x)
console.log(Array.isArray(arr))
console.log(Array.isArray(x))

if(Array.isArray(arr)){
    // arr = arr.toString()
    arr = arr.join(" * ")
}
console.log(arr)