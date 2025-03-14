const fs = require('fs');
const path = require('path');

// ✅ 상대 경로 설정
const filePath = path.join(__dirname, 'logs', 'workout_log.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log("운동 기록 파일이 없습니다.");
        } else {
            console.error("파일을 읽는 중 오류가 발생했습니다.", err);
        }
        return;
    }

    console.log("운동 기록 출력 완료!");
    console.log(data);
});