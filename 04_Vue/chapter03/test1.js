const fs = require('fs');
const path = require('path');

// ✅ 상대 경로 설정
const dirPath = path.join(__dirname, 'members');
const filePath = path.join(dirPath, 'kim_jong_kook.txt');

// ✅ 파일 내용
const fileContent = "김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg";

// ✅ 폴더 생성 (존재하지 않을 경우)
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// ✅ 파일 생성 및 내용 작성
fs.writeFileSync(filePath, fileContent, 'utf8');

// ✅ 경로 정보 추출
const dirname = path.basename(dirPath); // 상대 경로 기준
const basename = path.basename(filePath); // 파일 이름
const extname = path.extname(filePath); // 파일 확장자
const filename = path.basename(filePath, extname); // 확장자 제외 파일 이름

// ✅ 템플릿 문자열로 결과 출력
console.log(`파일 생성 완료!
디렉터리 경로: ${dirname}
파일 이름: ${basename}
파일 확장자: ${extname}
파일 이름(확장자 제외): ${filename}`);
