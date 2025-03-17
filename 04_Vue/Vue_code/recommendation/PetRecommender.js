import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PetRecommender{
    constructor(){
        this.arr = [];
    }
    recommendPet = function(customer) {
            let recommendedPet;
    
            if (customer.lifestyle === "활동적" && customer.housing === "단독주택") {
                recommendedPet = "골든 리트리버"; // 활동적 & 단독주택 → 대형견 추천
            } else if (customer.lifestyle === "조용한" && customer.housing === "아파트") {
                recommendedPet = "고양이"; // 조용한 & 아파트 → 고양이 추천
            } else if (customer.familyMembers === "어린이 있음") {
                recommendedPet = "래브라도 리트리버"; // 어린이 있는 가정 → 순한 개 추천
            } else {
                recommendedPet = "포메라니안"; // 기본 추천 (예외 처리)
            }
            this.arr.push({ name: customer.name, recommendedPet: recommendedPet });
        }
    saveToFile = async function(){
        try{

            const filePath = path.join(__dirname, "pet_recommendations.json");
            await fs.writeFile(filePath, JSON.stringify(this.arr, null, 2), 'utf-8');
        }
        catch(error){
            console.error("[저장 오류]", error);
        }
    }
}
export default PetRecommender;