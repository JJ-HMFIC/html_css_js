function calculateTotal(orders) {
  let totalOrders = {};
  for (let order of orders) {
    if (totalOrders[order.menu]) {
      totalOrders[order.menu] += order.quantity;
    } else {
      totalOrders[order.menu] = order.quantity;
    }
  }
  return totalOrders;
}
function isTopMenu(menu, totalOrders) {
  let max = Math.max(...Object.values(totalOrders));
  if(max === (totalOrders[menu])) return '예!';
  else return '아니오!';
  }

function processOrder(order) {
  
    return new Promise((resolve) => {
      setTimeout(() => {
      if(order.quantity>=3){
        console.log(`✅ ${order.menu} ${order.quantity}인분 주문 완료!`);
      }
      else{
        console.log(`❌ ${order.menu} ${order.quantity}인분은 주문 최소 수량 미달입니다.`);
      }
      resolve();
      }, 1000);
    });
  }

export { calculateTotal, isTopMenu , processOrder};


