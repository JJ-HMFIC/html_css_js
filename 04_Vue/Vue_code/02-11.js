let obj = { result: 0 };
obj.add = function(x,y) {  
    this.result = x+y;
}
let add2 = obj.add;
console.log(add2 === obj.add)      //true, 동일한함수
add2(3,4)       //전역변수result에7이할당됨.
console.log(obj);      //{ result: 0 }
console.log(result);   //7