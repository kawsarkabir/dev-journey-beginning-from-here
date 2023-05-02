/* // when ami template String ki ta jani na
const sentence1 = 'amar name kawsar\n' + 'amar boyos 18.\n' + 'ami bekar';
console.log(sentence1);

const sentence2 = `amar name mehady.
amar boyos 18.
ami bekar`;
console.log(sentence2);

const name = 'k2';
const age = 18;
const profation = 'developer';
console.log(`amar name ${name}. amar age ${age}. amar profation ${profation}`);
 */

// when template string ki ami jani na tokhon jevabe use kortam 

const name = 'someone';
const age = 18;
const job = 'jobless';

const sentence1 = 'amr name kawsar \n' + 'amar boyos 18\n' + 'ami jobless \n';
console.log(sentence1);


// when i know what is template string 
const sentence = `amr name kawsar
amar boyos 18. 
ami bekar.`;
console.log(sentence);

//  update vlaueee 
const sentence2 = `amar name ${name}. amar age ${age}. ami ${job}`;
console.log(sentence2);