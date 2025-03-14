class User{
    constructor(first,last){
        this.firstName = first;
        this.lastName = last;
        getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
    }
}
}
yura = new User('yura','choi');
jungwoo = new User('jungwoo','moon');