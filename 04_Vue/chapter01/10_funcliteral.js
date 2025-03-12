var add = function (a, b) {
  return a + b;
};
console.log("add : 2 + 3 = " + add(2, 3));

console.log("add1:  2 + 3 = " + add1(2, 3));
// console.log("4 + 5 = " + add2(4, 5)); // 에러
function add1(a, b) {
  return a + b;
} // 함수 선언식
var add2 = function (a, b) {
  return a + b;
}; // 함수 표현식

console.log(
  "2 + 3 = " +
    (function (a, b) {
      return a + b;
    })(2, 3)
);
