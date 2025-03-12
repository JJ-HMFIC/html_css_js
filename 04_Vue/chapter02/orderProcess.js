const order = [
    { menu: "삼겹살", quantity: 2 },
    { menu: "소고기", quantity: 3 },
    { menu: "닭갈비", quantity: 1 }
];

function processOrder(order) {
  // order.push({ menu: menu, quantity: quantity });
  let tmp = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ ${order.menu} ${order.quantity}인분 주문 처리 완료!`);
      resolve();
    }, 1000);
  });
  return tmp;
}
export {order, processOrder };
