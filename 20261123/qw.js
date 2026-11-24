let month = 11;

// if (month == 12 || month == 1 || month == 2) {
//   console.log("春");
// } else if (month == 3 || month == 4 || month == 5) {
//   console.log("夏");
// } else if (month == 6 || month == 7 || month == 8) {
//   console.log("秋");
// } else if (month == 9 || month == 10 || month == 11) {
//   console.log("冬");
// } else {
//   console.log("月份错误，需要1~12的月份");
// }

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("春");
    break;
  case 3:
  case 4:
  case 5:
    console.log("夏");
    break;
  case 6:
  case 7:
  case 8:
    console.log("秋");
    break;
  case 9:
  case 10:
  case 11:
    console.log("冬");
    break;

  default:
    console.log("月份错误，需要1~12的月份");
    break;
}
