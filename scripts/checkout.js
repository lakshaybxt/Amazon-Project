// import { loadProducts } from '../data/products.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart, loadCartFetch} from '../data/cart.js';
// import '../data/car.js';
// import '../data/backend-practice.js';

async function loadPage() {
	try {
		// throw 'error';
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);
		
	} catch (error) {
		console.log('Unexpected error. Please try again later.');
	}
	
	renderCheckoutHeader();
	renderOrderSummary();
	renderPaymentSummary();
}
loadPage()

/*
Promise.all([
	loadProductsFetch(),
  new Promise((resolve) => {
		loadCart(() => {
			resolve();
		});
	})
]).then((values) => {
	renderCheckoutHeader();
	renderOrderSummary();
	renderPaymentSummary();
});
*/
/*
new Promise((resolve) => {
	loadProducts(() => {
		resolve('value1');
	});

}).then((value) => {
	console.log(value);

	return new Promise((resolve) => {
		loadCart(() => {
			resolve();
		});
	});

}).then(() => {

});
*/
/*
loadProducts(() => {
	loadCart(() => {
		renderCheckoutHeader();
		renderOrderSummary();
		renderPaymentSummary();
	});
});
*/