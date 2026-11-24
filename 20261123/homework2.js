let isVip = false;
let pay = 800;

if (isVip) {
  if (pay >= 1000) {
    console.log(pay * 0.8);
  } else {
    console.log(pay * 0.9);
  }
} else {
  if (pay >= 1000) {
    console.log(pay * 0.95);
  } else {
    console.log(pay);
  }
}
