export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
	orders.unshift(order); // moves the product in front
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('orders', JSON.stringify(orders));
}