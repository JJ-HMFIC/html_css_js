class ConsultationManager{
    constructor(){
        this.arr = [];
    }
    registerConsultation = function(customer){
        
        if(customer.number.slice(0,3)!='010'){
            console.log(`[상담 등록 오류] ${customer.name}: 잘못된 전화번호 형식입니다.`);
            return;
        }
           for(let tmp of this.arr){ 
            if(tmp.name === customer.name && tmp.number === customer.number && tmp.pet === customer.pet){
                console.log(`[상담 중복 오류] ${customer.name}: 이미 등록된 상담 기록입니다.`);
                return;
            }
        }
        this.arr.push(customer);
        console.log(`[상담 등록] ${customer.name} - 선호 펫: ${customer.pet}`);
        }
    autoEndConsultation= function(){
        for(let tmp of this.arr){
            console.log(`[저장 완료] ${tmp.name} 상담 기록 저장 완료!`);
        }
        setTimeout(()=>{
            console.log(`[상담 기록 저장 종료]`);
        },5000);
    }
    }
    

export {ConsultationManager};