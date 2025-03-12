const orderStatus ={'닭갈비':'주문 대기','냉면':'주문 대기','타코야끼':'주문 대기'}

function updateStatus (menu,status){
    return new Promise((resolve)=>{
        setTimeout(() => {
            orderStatus[menu] = status;
            console.log(`🔄 ${menu} 상태가 ${status}(으)로 변경되었습니다.`)
            resolve();
        },1000)
    })
}
export{orderStatus,updateStatus};