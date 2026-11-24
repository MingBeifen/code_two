//字符串字面量

//单引号
let strOne = 'hello world';

//双引号
let strTwo = "hello world";

//反引号(模板字符串)
let strThree = `hello world`;

console.log(strOne,strTwo,strThree);

//反引号可以在字符串中插入一个变量  ${变量名}
let studentName = '小王';
// console.log('我的名字叫' + studentName);
console.log(`我的名字叫${studentName}`);