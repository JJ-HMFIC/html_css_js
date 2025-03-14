const fs = require('fs');
const path = require('path');

// ✅ 상대 경로 설정
const sourceFile = path.join(__dirname, 'logs', 'workout_log.txt');
const backupFile = path.join(__dirname, 'logs', 'backup_log.txt');

// ✅ 읽기 스트림 생성
const readStream = fs.createReadStream(sourceFile, 'utf8');
// ✅ 쓰기 스트림 생성
const writeStream = fs.createWriteStream(backupFile);

// ✅ 스트림 연결 (파일 복사)
readStream.pipe(writeStream);

// ✅ 복사 완료 이벤트 처리
writeStream.on('finish', () => {
    console.log("백업이 완료되었습니다.");
});

// ✅ 오류 처리
readStream.on('error', (err) => {
    console.error("백업 중 오류가 발생했습니다.", err);
});
writeStream.on('error', (err) => {
    console.error("백업 중 오류가 발생했습니다.", err);
});