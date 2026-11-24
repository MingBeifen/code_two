//&= 按位与赋值

// let num = 5;
// num &= 3;  // num = num & 3;
// // 5 & 3
// /*
//     00000101
//     00000011
// &   --------------
//     00000001
//     转为10进制后结果为1

// */
// console.log(num);

//&&= 逻辑与赋值
// let num = 5;
// num &&= 3;   num = num && 3;
// // 5是真值  3是真值
// console.log(num);

//??= 逻辑空赋值    空：null/underfined
let num = false;
num ??= 3;   //num = num ?? 3;
console.log(num);  //3