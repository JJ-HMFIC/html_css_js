class Item{
    constructor(name, type,stock, alwaysWarned=false){
        this.name = name;
        this.type = type;
        this.stock = stock;
        // this.alwaysWarned = alwaysWarned;
    }
    setStock = function(stock2){
        this.stock = stock2;
    }
}

class InventoryManager{                                                                                                         
    constructor(){
        this.items = [];
        this.chk = null;
    }
    addItem = function(item){
        if(!this.items.includes(item)){
            this.items.push(item);
            console.log(`[추가] ${item.type} - ${item.name} (재고:  ${item.stock})`);
        }
    }
    updateStock = function(foodName,num){
        for(let idx of this.items){
            if(idx.name === foodName){
                idx.setStock(num);
                if(num>=0 && num<5){
                    console.log(`[업데이트] 고급 고양이 사료 재고: ${num}개`)
                    console.log(`[재고 부족 경고] ${idx.name}: 재고가 5개 미만입니다!`);
                    idx.alwaysWarned = false;
                    break;
                }else if(num<0){
                    console.log(`[업데이트 오류] 재고는 0 이상이어야 합니다.`);
                    break;
                }
            }
        }
    }
    checkStock = function(){
        let elapsedTime = 0;

        this.chk = setInterval(() => {
            elapsedTime += 1;
            this.items.forEach(item => {
                if (item.stock<5 && !item.alreadyWarned) {
                    console.log(`[자동 경고] ${item.name}: 재고가 5개 미만입니다!!`);
                    item.alreadyWarned = true;
                }
            });

            if (elapsedTime >= 5) {
                clearInterval(this.chk);
                console.log("[재고 검사 종료]");
            }
        }, 1000);
    }
}


// 🐾 시스템 사용 예시
const inventory = new InventoryManager();

// 아이템 등록
const item1 = new Item('고급 고양이 사료', '사료', 10);
inventory.addItem(item1);

// 재고 업데이트
inventory.updateStock('고급 고양이 사료', 4);  // 5개 미만 → 경고 발생
inventory.updateStock('고급 고양이 사료', -1); // 음수 입력 → 오류 발생

// 재고 상태 검사 시작 (5초 후 종료)
inventory.checkStock();
