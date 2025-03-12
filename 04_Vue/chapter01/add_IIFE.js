const a = 8;

function multiply() {
  console.log(a * 2);
}
multiply();

(function () {
  console.log(a * 2);
}());
