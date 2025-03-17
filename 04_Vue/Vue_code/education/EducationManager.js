import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


class EducationManager{
    constructor(){
        this.edu = [];
    }
    registerProgram = function(education){
        this.edu.push(education);
        console.log(`[등록 완료] 교육 과정: ${education.title}`);
    }
    completeProgramWithFunction =function(string){
        this.edu.forEach(function(tmp){
            if(tmp.title === string){
                tmp.isCompleted = true;
                console.log(`[이수 완료 - 일반 함수] ${tmp.title}`);
            }
        })
    }
    completeProgramWithArrowFunction = function(string){
        this.edu.forEach(tmp => {
            if(tmp.title === string){
                tmp.isCompleted = true;
                console.log(`[이수 완료 - 화살표 함수] ${tmp.title}`);
            }
        });
    }
    saveToFile = async function() {
        try{
            const filePath = path.join(__dirname, 'education_records.json');
            await fs.writeFile(filePath, JSON.stringify(this.edu, null, 2), 'utf-8');
            console.log("[파일 저장 완료] 교육 기록이 파일로 저장되었습니다.");
        }
        catch{
            console.error("[저장 오류]", error);
        }
        
    }
}
export {EducationManager};