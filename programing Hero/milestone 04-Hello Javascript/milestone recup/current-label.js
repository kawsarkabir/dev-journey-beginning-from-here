/* Module 18_5

বেসিক জাভাস্ক্রিপ্ট (ভেরিয়েবল, এরে, কন্ডিশন, লুপ) এর চেকলিস্ট। 

১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
=> জাভাস্ক্রিপ্ট হল একটি ক্লায়েন্ট সাইড স্ক্রিপ্টিং বা ব্রাউজার স্ক্রিপ্টিং ল্যাংগুয়েজ। জাভাস্ক্রিপ্ট (সংক্ষেপে JS বলা হয়) একটি প্রোটোটাইপ-ভিত্তিক স্ক্রিপ্টিং ল্যাংগুয়েজ যাতে পরিবর্তনশীল, দুর্বল টাইপ এবং প্রথম শ্রেণীর ফাংশন আছে। এটি একটি অবজেক্ট ওরিয়েন্টেড, কার্যকরী প্রোগ্রামিং শৈলী সমর্থনকারী ভাষা।


২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
=> যখন JavaScript ফাইলটি ব্রাউজারে লোড করা হয়, তখন JavaScript ইঞ্জিন ফাইলের প্রতিটি লাইনকে উপরে থেকে নীচে চালাবে। এটি একটি interpreted programming language তাই সোর্স কোড এক্সিকিউশনের আগে বাইনারি কোডে কম্পাইল করা হয় না। জাভাস্ক্রিপ্ট ইঞ্জিন কোড লাইন থেকে লাইন পার্স করবে, এটিকে মেশিন কোডে রূপান্তর করবে এবং তারপর এটি কার্যকর করবে। জাভাস্ক্রিপ্ট ইঞ্জিন হল একটি কম্পিউটার প্রোগ্রাম যা জাভাস্ক্রিপ্ট কোড কার্যকর করে। জাভাস্ক্রিপ্ট ইঞ্জিনগুলি আজকের সমস্ত আধুনিক ব্রাউজারে অন্তর্নির্মিত, প্রতিটি ব্রাউজারের নিজস্ব জাভাস্ক্রিপ্ট ইঞ্জিন আছে কিন্তু সবচেয়ে পরিচিত ইঞ্জিন হল Google এর V8।

যেকোনো জাভাস্ক্রিপ্ট ইঞ্জিনে সর্বদা একটি কল স্ট্যাক এবং একটি memory heap থাকে। কল স্ট্যাক হল যেখানে আমাদের কোড আসলে কার্যকর করা হয়। তারপর memory heap হল একটি অসংগঠিত মেমরি পুল যা আমাদের অ্যাপ্লিকেশনের প্রয়োজনীয় সমস্ত বস্তু সংরক্ষণ করে।


৩. ভেরিয়েবল কি জিনিস ?
==> ডাটা সংরক্ষণ করার মাধ্যম।

৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
=> এর জন্য আমাদের পথমে var কি ওয়ার্ড বাবহার করতে হবে, পরে একটা নাম লাগবে , = সাইন লাগবে, ; সেমিকলন লাগবে
যেমন  var variableName = 29;


৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
==> নাম আপদেদ করার জন্য খালি পরবর্তী মান দিলে দিলেই হবে আরেকবার আবার ভারিয়াব্লে লিখে দিক্ল্যার করতে হবে না যেমন
variableName = 90;


৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
=> variable money type in js. here is example... 
var numberType = 20;
var strType = 'kawsar kabir';
var booleanType = true;


৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
=> Primitive ডাটা টাইপ
জাভাস্ক্রিপ্টে 5 প্রকার Primitive ডাটা টাইপ রয়েছে। এগুলো হল নিম্নরূপ -

String -
Number - গাণিতিক বা numeric মান নির্ধারণ করে,
Undefined - Undefined মান নির্ধারণ করে,
Boolean - কেবল মাত্র দুইটি মান বা value ব্যবহার করে অর্থাৎ "true" এবং "false" ব্যবহার করে মান নির্ধারণ করে,
Null - শূন্য বা null মান নির্ধারণ করে,

Non-primitive বা reference ডাটা টাইপ
জাভাস্ক্রিপ্টে 3 প্রকার Non-primitive বা reference ডাটা টাইপ রয়েছে। এগুলো হল নিম্নরূপ -

Object -
Array - একই রকম মান বা value গুলোর গুচ্ছ বা group তৈরি করে,
RegExp - regular expression গুলো তৈরি করে,


৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
=> variale ar anme fast of all kunu keysword use kora jabe na
2. pothome number use kora jabe na 
3. kunu symble use kora jabe na but $ sign use kora jabe 
4. akhane case seccetive jemon Name r name 2ta alada variable nam akhne
5. recomened holo camelcase jemon
var sympleTestName = true;


৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
var num1 = 10;
var num2 = 5;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)


১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
=> += means exating value ar sathe jog hoye jabe jsut
-= means exating value ar sathe biyog hoye jabe jsut
*= means exating value ar sathe multipication hoye jabe jsut
/= means exating value ar sathe divition hoye jabe jsut

১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
=> ++ means 1, 1 kroe man barbe
-- means 1, 1 kore biyog hoye jabe


১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 
=> parseInt holo jokhn amra kunu purnosongkha nite cassi
parsefloat holo jokhn amra kunu vonggangshow nite cassi
toFixed holo jokhn amra kunu vonggangshow nite cassi and setake nirdisto kore bole dite cassi j tumu ai decimel out pabe

--------------

১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
=> array holo onek gula value pass korar maddam. eta declaare korar niyom holo
pothome akta array ar anme hobe then pottekta items ke ,koma diye alada kore dite hobe
var arry = [2, 4, 5, 6, 90];



১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
var arry = [1, 2, 3, 4, 4,5 ,6 ,777,8 ,8 ,90];
console.log(arry.length);


১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
=> array ar upadan gula 0 theke suru hoi.
avabe notun man set kora hoi
var arry = [1, 2, 3, 4, 4,5 ,6 ,777,8 ,8 ,90];
arry[3] = 90;
console.log(index);



১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
=> -1 bolte bujai  oi elements oi array ar modde nai bujhte hobe


১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
var arry = [1, 2, 3, 4, 4,5 ,6 ,777,8 ,8 ,90];
index = arry[3]
console.log(index);

১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 

১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
=> .push() diye add korbo r .pop() diye ber korbo


২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
==> .shift() diye ber korbo r unshift() diye add korbo 


২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
console.log(5 > 6)
console.log(5 < 6)
console.log(5 == 6)
console.log(5 != 6)
console.log(5 <= 6)
console.log(5 >= 6)
console.log(5 === 6)
console.log(5 !== 6)
console.log(5 || 6)


২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
=> var tkAse = 19000;
if(tkAse >= 80000){
    console.log('mac kinbo');
}
else if( tkAse >= 60000){
    console.log('gamming laptop kinbo');
}
else if( tkAse >= 40000){
    console.log('lenovo yoga kinbo');
}
else if( tkAse >= 20000){
    console.log('old laptop kinbo');
}
else{
    console.log('mobile diyei kaz chalabo');
}


---------------------

২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
=> for(var i = 1; i<=39; i++){
    console.log('আজকে আমার মন ভালো নাই');
}

২৬. while লুপ কিভাবে কাজ করে 
=>  while loop কিভাবে কাজ করে? while লুপে, কন্ডিশনটি প্রথমে মূল্যায়ন করা হয় এবং যদি এটি সত্য হয় তবে লুপের ভিতরে স্টেটমেন্টগুলি কার্যকর হয়, কন্ডিশনটি মিথ্যা না হওয়া পর্যন্ত এটি বারবার ঘটবে। কন্ডিশন মিথ্যা হলে, কন্ট্রোল লুপ থেকে বেরিয়ে আসে এবং while লুপের পর প্রোগ্রামের পরবর্তী স্টেটমেন্টে চলে যায়।


২৭. for লুপ কিভাবে কাজ করে ?
=> for লুপের প্রথম বন্ধনীর ভেতরের তিনটি অংশই যে ব্যবহার করতে হবে এমন কোন কথা নেই। কোন অংশ ব্যবহার করতে না চাইলে আমরা সেটি ফাঁকা রেখে দিতে পারি, তবে সেমিকোলন কিন্তু অবশ্যই দিতে হবে। যেমন আমরা যদি i-এর মান আগেই নির্ধারণ করে দেই তবে সেটি লুপের ভেতর না করলেও চলে।



২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
=> infinity হয়ে যাবে।



২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
=> for(var i =58; i<=98; i+=2){
    console.log(i);
}


৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
=> var evenNumber = 412;
while(evenNumber <= 456){
    evenNumber += 2;
    console.log(evenNumber);
}

 

৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
=> for(var i = 581; i<=623; i+=2){
    console.log(i);
}


৩২.while আর for loop এর মধ্যে পার্থক্য কি 

৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।  */