const users = [{id:1, name: 'k2', job: 'developer'}];
console.log(users[0].id);

let data = {
    count: 5000,
    data:[{id:11, name: 'kawsar', job: 'reactJs developer'}]
}
console.log(data.data[0].job);

// another exp:
const user ={
    id:8902,
    name: 'Thomas alba edison', 
    address:{
        street: '35/A kochukhet lane',
        postOfice: 'cantonment', 
        city: 'Dhaka'
    }
}
// console.log(user.address.postOfice);
const userFloor = user.address.street;
console.log(userFloor);