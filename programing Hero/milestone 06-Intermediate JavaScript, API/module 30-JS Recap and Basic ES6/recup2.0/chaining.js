const users =[
    {id:1, name:'abul', job: 'doctor'}, 
]
// console.log(users[0].name);
const data = {
    count: 5500, 
    info:[
        {id:1, name:'babul', job:'dev'},
        {id:2, name:'abul', job:'prog'}

    ]
}
// console.log(data.count);
console.log(data?.info[0].name);