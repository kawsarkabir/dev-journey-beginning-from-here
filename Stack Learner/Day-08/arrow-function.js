// arrow funciton 
function add(a, b){
    return a + b
}

let sum =(a,b) => a + b 

let sqr = x => x*x


//  affow function , this 

let obj = {
    name: 'kawsar kabir',
    print: function(){
        setTimeout(()=>{
            console.log(this);
            console.log(`Hello , ${this.name}`);
        })
    }
}
obj.print()