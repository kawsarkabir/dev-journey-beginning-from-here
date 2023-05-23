// scope chaing
let a = 11
function A(){
    let b = 12
    function B(){
        let c = 23
        console.log(c);
    }
    function C(){
        let d = 56
        console.log(d);
    }
    console.log(b);
    D()
    B()
    C()
}

function D(n){
    return n + a
}

// A function => a, b, B(), C(), D()
// B function => a, b, c, B(), C(), D()
// C function => a, b, d, B(), C(), D()
// D function => a, n,  A()