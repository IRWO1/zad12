let a = "Uwielbiam JavaScript";
let b = "Jestem świetnym programistą";
function stringLength(a, b){
    let wynik;
    if(a.length>b.length){
        wynik = a;
    } else {
        wynik =b;
    }
    return wynik;
}
console.log(stringLength(a, b));