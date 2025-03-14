const fs = require('fs');
const path = require('path');

// ✅ 상대 경로 설정
const filePath = path.join(__dirname, 'logs', 'members.txt');

// ✅ 추가할 회원 정보
const newMember = "이승기: 체중 68kg, 벤치프레스 80kg\n";

// ✅ 파일 존재 여부 확인 후 추가
fs.appendFile(filePath, newMember, (err) => {
    if (err) {
        console.log("회원 정보 파일이 없습니다.");
        return;
    }
    console.log("회원 정보가 성공적으로 추가되었습니다.");
});
