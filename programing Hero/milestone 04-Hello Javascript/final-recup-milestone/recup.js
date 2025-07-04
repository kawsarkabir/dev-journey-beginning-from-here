/* 1. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো ?
=>জাভাস্ক্রিপ্ট হল একটি ক্লায়েন্ট সাইড স্ক্রিপ্টিং বা ব্রাউজার স্ক্রিপ্টিং ল্যাংগুয়েজ। জাভাস্ক্রিপ্ট (সংক্ষেপে JS বলা হয়) একটি প্রোটোটাইপ-ভিত্তিক স্ক্রিপ্টিং ল্যাংগুয়েজ যাতে পরিবর্তনশীল, দুর্বল টাইপ এবং প্রথম শ্রেণীর ফাংশন আছে। এটি একটি অবজেক্ট ওরিয়েন্টেড, কার্যকরী প্রোগ্রামিং শৈলী সমর্থনকারী ভাষা।

2. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো ?
জাভাস্ক্রিপ্ট একটি ব্যাখ্যা করা ভাষা, একটি সংকলিত ভাষা নয়। একটি প্রোগ্রাম যেমন C++ বা জাভা চালানোর আগে কম্পাইল করা দরকার। সোর্স কোড একটি কম্পাইলার নামক একটি প্রোগ্রামের মাধ্যমে পাস করা হয়, যা এটিকে বাইটকোডে অনুবাদ করে যা মেশিন বুঝতে পারে এবং চালাতে পারে।

৩. ভেরিয়েবল কি জিনিস ?
=> 

৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
=> let variablName = 10;

৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে।
=> variableName = 12;

6. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
=> number, string, boolean, null, undefined, 

৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
=>  primirive data type:
1. number
2. string
3. boolean
4. null
5. undefined
=> non primitive data type
1. function
2. objecr
3. array

৮.ভেরিয়েবল এর নাম কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
1. no spece
=> const fast name = 'kawsar'
2. not prev added number 99 (samne number use kora jabe na)
=> const 99num = 'true';
3.any js keyword not allowed
==> let function = fals;
4.Recomended way to camelCase
==> const camelCase = true;

৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
let a = 10;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
==> let a = 1;
console.log(a += 1);
console.log(a -= 1);
console.log(a *= 1);
console.log(a /= 1);
console.log(a %= 1);

১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
==> console.log(a ++);
console.log(a --);

১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 
=> let x = 0.1;
let y = 0.2;
let sum = x + y;
console.log(parseFloat(sum.toFixed(2)));

১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 

১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 

১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 

১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 

১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 

১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 

১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 

২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 



---------------------

২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

২৬. while লুপ কিভাবে কাজ করে 

২৭. for লুপ কিভাবে কাজ করে 

২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 

২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

৩২.while আর for loop এর মধ্যে পার্থক্য কি 

৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে।

*/



