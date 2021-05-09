let contoh = "truncate".split('')
for(let i =0; i < contoh.length; i++){
    for(let j =i; j < contoh.length; j++){
        if(contoh[i] > contoh[j]){
            let temp = contoh[i]
            contoh[i] = contoh[j]
            contoh[j] = temp
        }
    }
}
console.log(contoh.join(''))

let kalimat = "Truncate"
console.log(kalimat)
console.log(kalimat.split(''))
console.log(kalimat.split('').sort())
console.log(kalimat.split('').sort().join(''))