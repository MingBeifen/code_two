/*
   变量的定义方式以及变量的使用
   1、一行代码定义多个变量
   2、变量和变量之间进行计算
*/
let age = 18;

//定义变量的同时也可以给变量进行赋值
// let a = 1, b = 2, c = 3;
// console.log(a, b, c);


// let a,b,c = 10;  // a,b变量只被定义，没有被赋值，c被赋值为10
// a = 1;
// b = 2;
// console.log(a,b,c);//通过变量的名称访问变量中的值

//变量之间的运算
// let applePrice = 5;
// let appleCount = 2;
// let totalPrice = applePrice * appleCount;//赋值运算=    算术运算*  运算符的优先级：* 优先级 大于 =
// console.log(totalPrice);


//变量的重新赋值
// let studentName;
// studentName = '张三';
// studentName = '张三丰';
// console.log(studentName);

//两个变量中存储的值进行交换  numOne 10 numTwo 20  ====> numOne 20 numTwo 10
let numOne = 10;
let numTwo = 20;

let temp = numOne;//临时变量  temp = 10
numOne = numTwo; //numOne = 20   给numOne变量重新赋值,原先的值10被覆盖了，现在变量的值为20
numTwo = temp;  //numTwo = 10    给numTwo变量重新赋值,原先的值20被覆盖了，现在变量的值为10
console.log(numOne, numTwo);
