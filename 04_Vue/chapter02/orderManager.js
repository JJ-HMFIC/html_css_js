const orders = {};

function addOrder(menu, quantity) {
    orders[menu] = quantity;
}

export{orders,addOrder};