var arr = ["Roro", "Indri", "Ari", "Ahkam", "Rayi", 
    "Fitra", "Yeyen", "Emil", "Dimas", "Raissa", 
    "Ramzy"]

var arr = [1, 2, 4, 7, 3, 6, 5, 10, 9, 8]
// Index = 0
// ["Roro","Indri","Ari","Ahkam","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Indri","Roro","Ari","Ahkam","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ari","Roro","Indri","Ahkam","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ari","Roro","Indri","Ahkam","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Roro","Indri","Ari","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Roro","Indri","Ari","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]

// Index = 1
// ["Ahkam","Roro","Indri","Ari","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Indri","Roro","Ari","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Roro","Indri","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Roro","Indri","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]

// Index = 2
// ["Ahkam","Ari","Roro","Indri","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Indri","Roro","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Indri","Roro","Rayi","Fitra","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Fitra","Roro","Rayi","Indri","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Fitra","Roro","Rayi","Indri","Yeyen","Emil","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Emil","Roro","Rayi","Indri","Yeyen","Fitra","Dimas","Raissa","Ramzy"]
// ["Ahkam","Ari","Dimas","Roro","Rayi","Indri","Yeyen","Fitra","Emil","Raissa","Ramzy"]
// ["Ahkam","Ari","Dimas","Roro","Rayi","Indri","Yeyen","Fitra","Emil","Raissa","Ramzy"]

// Cara Kerja Sorting
// for(let i = 0; i < arr.length; i++){
//     console.log("Index =", i)
//     console.log(arr.toString())
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             // [arr[i], arr[j]] = [arr[j], arr[i]]
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//         console.log(arr.toString())
//     }
// }
// console.log(arr)
function asc(a, b){
    return a - b;
}

function desc(a, b){
    return b - a;
}

console.log(arr.sort())
console.log(arr.sort(asc))
console.log(arr.sort(function(a,b){return a - b}))
console.log(arr.sort(desc))
console.log(arr.sort(function(a,b){return b - a}))