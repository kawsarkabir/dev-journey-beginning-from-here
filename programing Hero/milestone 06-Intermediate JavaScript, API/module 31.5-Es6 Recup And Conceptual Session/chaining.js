const petOwner ={
    name: 'Helo Alam',
    contact:{
        phone:'018829924',
        email:'dev@gmail.com'
    },
    cat:{
        name:'lofie',
        info:{
            color: 'black',
            weight: '1.2kg'
        }
    }
};
// console.log(petOwner?.dog?.name);
console.log(petOwner.cat.name);
console.log(petOwner.cat.info.color);
console.log(petOwner.cat?.info?.food?.price);