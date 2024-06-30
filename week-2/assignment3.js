// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the total price of all products after applying a discount.



function calculate(data) {
	// your code here
	let totalPrice = 0;
	let discount = data.discount;
	let total_product_num = data.products.length;

	for (let i = 0; i < total_product_num; i++){
		totalPrice += data.products[i].price * discount;
		// console.log(totalPrice,'totalPrice'); 
	}
	return totalPrice;
}
const discountedPrice = calculate({
	discount: 0.1,
	products: [
		{
			name: "Product 1",
			price: 100
		},
		{
			name: "Product 2",
			price: 700
		},
		{
			name: "Product 3",
			price: 250
		}
	]
});
console.log(discountedPrice) // show the total price of all products after applying a discount
