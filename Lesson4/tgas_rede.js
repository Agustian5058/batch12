var hege = ["Cecilie", "Lone", "Linus", "Totok", "Bagus"]; //lis A
var stale = ["Emil", "Tobias", "Linus", "Cecilie"];        //Lis B
console.log(hege)
console.log(stale)
let cari_sama = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        let arr_a = a[i];
        let cari = b.filter(b => b == arr_a);
        if(cari.length > 0){
            a.splice(a.indexOf(cari[0]), 1)
        }
        console.log(cari, "data sama", i);
        console.log(a.indexOf(cari[0]), "<==== Urutan ")
    }
    console.log(a);
}
cari_sama(hege, stale);