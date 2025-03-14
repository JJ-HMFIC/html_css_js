let obj = { result: 0 };
obj.add = function(x,y) {  
    this.result = x+y;
}
obj.add(3,4); //일반 함수에서는 호출한 함수가 this 가 된다
console.log(obj);