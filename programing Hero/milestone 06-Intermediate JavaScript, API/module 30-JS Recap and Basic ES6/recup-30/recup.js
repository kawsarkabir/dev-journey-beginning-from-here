/* document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue'
    }
});

// centeer the third
document.getElementById('centerTheThird-btn').addEventListener('click', function(){
    const centerTheThird = document.getElementById('centerTheThird');
    centerTheThird.style.textAlign = 'center';
})
document.getElementById('addNewFriend-btn').addEventListener('click', function(){
    const sectionContainer = document.getElementById('section-container');
    const div = document.createElement('div');
    div.classList.add('friend')
    div.innerHTML = `
    <h3>Friend-6</h3>
    <p>i am yours new friend</p>
    `;
     sectionContainer.appendChild(div);

}) */
// var ==> let ==> const 
// breakUp with var || no more use of var 
// === let: it to ressing
let money = 20;
money = 30;
console.log(money);

// const :: do not it ressing
const bird = 'jaan Pakhi';
// bird = 'moina pakhi';
console.log(bird);

// 30-3 Function default parameter for not provided values

/* function add(num1, num2){
    // console.log(num1, num2);
    if(num1 && num2 === undefined){
        // num1 = 0;
        num2 = 0;
    }
    const total = num1 + num2
    return total;
}
const result = add(10);
console.log(result); */
//
function add(num1 = 90, num2=0){
    console.log(num1, num2);
    const total = num1 + num2
    return total;
}
const result = add(9);
console.log(result);

// Template string
const person = 'kawsar';
const person2 = 'k2';
let multiLine = 'amar sonar' +
'bangla ami tumai vlovasi' +
'kput dkufdy ';
console.log(multiLine);

// solution
const multiLine2 = `pothom line
second line
third line`
console.log(multiLine2);