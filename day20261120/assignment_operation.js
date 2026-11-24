//赋值运算符

//加法赋值
// let num = 10;
// num += 20; // num = num + 20
// console.log(num);

//取余赋值
// let num = 10;
// num %= 3;   // num = num % 3
// console.log(num);

//指数赋值
// let num = 2;
// num **= 3;  // num = num ** 3
// console.log(num);

//左移运算/右移运算   针对数值的二进制进行移位操作

// let num = 10;
// // 把10（二进制数1010）向左移动2位，数值会变大  简单公式：数值*2^移动的位数 10*2^2  = 40
// let result = num << 2;   
// console.log(result);

let num = 16;
//10000  向右移动一位 变为1000  值为8
let result = num >> 1;
console.log(result);