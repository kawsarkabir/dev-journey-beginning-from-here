// akta scope ar vitore jodi abr arekta scope declaration kora hoi setai nested scope 

let x = 10
function a(){
    let x = 101
    function nested(){
        let y = 65
        console.log(x);
    }
    // y is not defined cause eta scope ar baire
    // console.log(y);
    nested()
}
a()