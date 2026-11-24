//逻辑运算符   结果要么为 truthy 真值   要么位 falsy 假值
//falsy 假值  ：null undefined 0 '' NaN  false
//逻辑与运算
// let flagOne = true;
// let flagTwo = false;
// let result = flagOne && flagTwo;
// console.log(result);

// let flagOne = 'abc';  // truthy 真值
// let flagTwo = null;     // falsy 假值
// let result = flagOne && flagTwo;  //假值  取值：flagTwo
// console.log(result);

// let flagOne = 'abc';  // truthy 真值
// let flagTwo = 20;     // truthy 真值
// let result = flagOne && flagTwo;  //真值  取值：flagTwo
// console.log(result);

//逻辑或运算
// let flagOne = 'abc';  // truthy 真值
// let flagTwo = null;     // falsy 假值

// let result = flagOne || flagTwo; //真值  取值：flagOne
// console.log(result);

// let resultOne = flagTwo || flagOne;//真值  取值：flagOne
// console.log(resultOne);

//逻辑非运算
// let flag = true;
// let result = !flag;
// console.log(result);

// let flag = null;     //假值
// let result = !flag;  //取反变为真值，默认自动转为boolean类型的数据，因此为true
// console.log(result);

//?? 空值合并（ES2020）

let num = null;
let result = num ?? 20; //判断num是否为假值，为假值则取20，如果为真值，则取num本身这个值
console.log(result);