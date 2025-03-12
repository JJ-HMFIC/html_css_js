// import order_list from "./order.js"; 1
// import { orders, addOrder } from "./orderManager.js"; 2
// import { grillMeat } from "./grill.js"; 3
// import { order, processOrder } from "./orderProcess.js"; 4
// import { orderStatus,updateStatus } from "./status.js"; 5
// import orders from "./orderList.js"; 6
// import { isTopMenu as isTop,calculateTotal as calc } from "./orderProcessor.js"; 6
// import { processOrder } from "./orderProcessor.js"; 7

// let find = "삼겹살";
//------------------------------------1번번------------------------------------------------------
// let cnt = 0;
// for (let key in order_list) {
//   if (key == find) {
//     console.log(`✅ ${'삼겹살'} 주문 수량: ${order_list['삼겹살']}인분`);
//     cnt = 1;
//     break;
//   }
// }
// if (!cnt) console.log("❌ 삼겹살 주문 내역이 없습니다.");
// addOrder("삼겹살", "3인분");
// addOrder("목살", "2인분");
//------------------------------------2번------------------------------------------------------

// if (Object.keys(orders).length != 0) {
//   console.log("✅ 현재 주문 내역:");
//   for (let key in orders) {
//     console.log(`${key} : ${orders[key]}`);
//   }
// } else {
//   console.log("❌ 주문 내역이 없습니다.");
// }
//--------------------------------------3번----------------------------------------------------
// async function startGrilling() {
//   let tmp = await grillMeat("삼겹살");
//   console.log(tmp);
//   console.log('🍽️ 식사 시작!');
// }
// startGrilling();
//--------------------------------------4번----------------------------------------------------

// async function processOrders() {
//   await processOrder(order[0]);
//   await processOrder(order[1]);
//   await processOrder(order[2]);
//   console.log('🍽️ 모든 주문 처리 완료! 식사 시작!');
// }
// processOrders();
//--------------------------------------5번----------------------------------------------------
// async function trackStatus() {
//     await updateStatus('타코야끼','굽는 중');
//     await updateStatus('타코야끼','완료');
//     await updateStatus('닭갈비','굽는 중');
//     await updateStatus('닭갈비','완료');
//     const json = JSON.stringify(orderStatus);
//     console.log(`📋 최종 주문 상태:` +json);
// }
// trackStatus();
//--------------------------------------6번----------------------------------------------------
// let tmp = calc(orders);

// console.log("✅ 총 주문 수량: "+ JSON.stringify(tmp));
// console.log('🥩 삼겹살이 가장 인기 메뉴인가요? '+ `${isTop('삼겹살',tmp)}`);
//--------------------------------------7번----------------------------------------------------
const orders = [
    { menu: "삼겹살", quantity: 2 },
    { menu: "소고기", quantity: 3 },
    { menu: "닭갈비", quantity: 1 },
    { menu: "항정살", quantity: 4 }
]
async function processAllOrders(orders) {
    for(let order of orders){
        await processOrder(order);
    }
}
processAllOrders(orders);



