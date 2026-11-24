//js中的数据类型

//Number类型  NaN是一个特殊值，类型为number
// let num = 10;
// let nan = NaN; // 虽然 typeof NaN 返回 "number"，但它代表非数字
// console.log(num,nan);
// console.log(typeof nan);//查看nan变量中存储的值的数据类型
// console.log(10 / 0);  //Infinity  无穷大


//String类型
// let str = "Hello";
// let strOne = 'Hello';


// let template = `Hello`; //反引号  反引号中可以引用其他变量 ${变量名}
// let result = `${template} World!!!`
// console.log(result);

//Boolean类型  布尔类型     true/false
// let isLogin = true;
// let canEdit = false;

//Undefined类型
// let x;
// console.log(x); // undefined

//Null类型  清空变量中原始的数据
// let empty = null;

//Symbol类型  表示的是唯一的值
// let symOne = Symbol("张三");
// let symTwo = Symbol("张三");
// console.log(symOne === symTwo);  //false

//BigInt类型  大整数
let num = 1000000;  //Number范围内的整数
let bigNum = 10000000000000000000000000000000000000n;
console.log(num,bigNum);


