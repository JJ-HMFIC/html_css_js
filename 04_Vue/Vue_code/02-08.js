//매개변수 받으면서 바로 구조 분해 할당당
function addContact1({name, phone, email="이메일없음", age=0}) {
    console.log(name,phone,email,age);
}    
addContact1({ name : "이몽룡", phone : "010-3434-8989" });


//
function addContact2(contact) {
    if (!contact.email) contact.email = "이메일없음";
    if (!contact.age) contact.age = 0;
    let { name, phone, email, age} = contact;
    console.log(name,phone,email,age);
}    
addContact2({ name : "이몽룡", phone : "010-3434-8989" });


// 3. 구조분해 할당 없이 기본 매개변수 사용해서 넘겨줌줌
function addContact3(name,phone,email="이메일없음",age=0) {
    console.log(name,phone,email,age);
}    
addContact3("이몽룡","010-3434-8989");