// const yura = {
//   firstName: "yura",
//   lastName: "choi",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(yura.getFullName());
// 일반 함수에서 this는 호출한 객체(여기서는 yura)

function User(first,last){
    this.firstName = first;
    this.lastName = last;
}
// 프로토 타입에 추가된 함수는 객체 전체가 공유한다
User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;}

const yura = new User('yura','choi');
const jungwoo = new User('jungwoo','moon');