// 32-1 How does internet work and What is an API


//  what is json 
const user = { id:1, name: 'gorib people', job: 'actor'};
const stringfied = JSON.stringify(user)
console.log(user);
console.log(stringfied);


// another exapmple here 
const shop = {
    owner:'alia', 
    revinue: 45900,
    isNew: false, 
    address:{
        street: 'barabil kharuyajongla',
        city: 'shahzadpur'
    },
    isOpen: true,
    product:['keyboard', 'microphone', 'headphone', 'mobile']
}
console.log(shop);

// jokhn javasript ar kunu obj ke string a convert korte hobe tokhn ata kaze dibe 
const shopJSON = JSON.stringify(shop)
console.log(shopJSON);

// jokhn JSON diye stringify obj ke convert kore dei setake abr aager obj a convert korte parse use korte hoi
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);

