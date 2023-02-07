// 19-4 Everything you need to know about return from a function

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating singaras:', singaras);