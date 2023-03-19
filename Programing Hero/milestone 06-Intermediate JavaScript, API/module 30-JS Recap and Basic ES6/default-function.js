function add(frist, second = 90){
    console.log(frist, second);
   /*  if(second === undefined){
        second = 0;
    }  */
    const total = frist + second; 

    return total;
}
const result = add(1, 80)
console.log(result);