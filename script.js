// Exercise #1

let categories = ['Health', 'Fashion', 'Toys', 'Electronic', 'TV', 'Sports', 'Watches', 'Motorbike','Home and Lifestyle','Device'];
let categories_firsthalf = categories.slice(0,5);
console.log(categories_firsthalf);

//Exercise #2

const str1 = ['Apple' , 'Banana' , 'Orange', 'Grapes'];
const str2 = ['abc', 'def', 'ghi', 'jkl'];
str1.splice(0,1);
str2.splice(0,1);
const str = str1.concat(str2);
console.log(str);

//Exercise #3

//Descending
const Descending = (a,b) => {
    return b-a;
 }

const NumericArray = ['80', '9', '700', 40, 1, 5, 200];
NumericArray.sort(Descending);
console.log(NumericArray);

//Ascending
const Ascending = (a,b) =>{
    return a-b;
}
const NumericArray1 = ['80', '9', '700', 40, 1, 5, 200];
 NumericArray1.sort(Ascending);
 console.log(NumericArray1);

//Exercise#4

const months = ['Jan', 'March', 'April', 'Dec'];
months.splice(1,0,'Feb');
months.pop();
months.push('May', 'June');
console.log(months);

//Exercise#5

let joinarr = ["Me", "my family"];
joinarr.splice(1,0,'and');
console.log(joinarr)
