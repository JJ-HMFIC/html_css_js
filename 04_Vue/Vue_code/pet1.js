class PetHealthManager{
    constructor(date){
        this.pets = [];
  
    }
    registerPet = function(pet){
        this.pets.push(pet);
        console.log(`[등록] ${pet.species} - ${pet.name} (예방접종: [${[...pet.vaccinations].join(', ')}], `
       + `건강검진: ${pet.healthCheckDate.toISOString().split('T')[0]})`);
    }
    checkHealthStatus() {
        let elapsedTime = 0;

        this.healthCheckInterval = setInterval(() => {
            elapsedTime += 3;
            this.pets.forEach(pet => {
                if (pet.needsHealthCheck() && !pet.alreadyWarned) {
                    console.log(`[건강검진 경고] ${pet.name}: 1년 이상 건강검진을 받지 않았습니다!`);
                    pet.alreadyWarned = true;
                }
            });

            if (elapsedTime >= 10) {
                clearInterval(this.healthCheckInterval);
                console.log("[검사 종료]");
            }
        }, 3000);
    }
   
}
class Pet{
    constructor(name, species,vaccinations,healthCheckDate,alreadyWarned=false){
        this.name =name;
        this.species = species;
        this.vaccinations = vaccinations;
        this.healthCheckDate = healthCheckDate;
        this.alreadyWarned = alreadyWarned;
    }    
    addVaccination = function(disease){
        if(!this.vaccinations.includes(disease)){
            this.vaccinations.push(disease);
            console.log(`[예방접종 추가] ${this.name}: ${disease}`);
        }else{
            console.log(`[예방접종 중복] ${this.name}: ${disease}은 이미 등록되어 있습니다.`);
        }
    }
    updateHealthCheckDate = function(date){
        this.healthCheckDate = date;
        this.alreadyWarned = false;
        console.log(`[건강검진 업데이트] ${this.name}: ${date.toISOString().split('T')[0]}`);
    }
    needsHealthCheck() {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return this.healthCheckDate < oneYearAgo;
    }
}
// 🐾 시스템 사용 예시
const manager = new PetHealthManager();

// 펫 등록
const pet1 = new Pet('나비', '고양이', ['종합백신'], new Date('2023-03-10'));
manager.registerPet(pet1);

// 예방접종 추가
pet1.addVaccination('광견병');
pet1.addVaccination('광견병'); // 중복 테스트

// 건강 상태 검사 시작
manager.checkHealthStatus();

// 5초 후 건강검진 업데이트 (경고 초기화 테스트)
setTimeout(() => {
    pet1.updateHealthCheckDate(new Date());
}, 5000);