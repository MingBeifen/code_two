//比较运算符

let numOne = 10;    //Number
let numTwo = '10';  //String

console.log(numOne == numTwo);  //直接比较值是否相等
console.log(numOne === numTwo); //既要比较值，也要比较类型

console.log(numOne != numTwo);  //false
console.log(numOne !== numTwo); //true


// >=
console.log(numOne >= numTwo);  //会先转为Number类型，再进行计算

console.log(numOne + numTwo);//此处的+号是字符串拼接，而不是数字相加
console.log(numOne - numTwo);//会先转为Number类型，再进行计算
console.log(numOne * numTwo);//100
console.log(numOne / numTwo);//1

console.log('abc' - 10);//NaN  not a number  不是一个数值