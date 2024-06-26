//Assignment 1: Function and Array
//Complete the function below to find the max number of the passing array of numbers.

//Reminder: you can't use built-in Math.max() or sort() to complete this assignment.



function max(numbers) {
	// your code here
    let order_data = numbers[0];

    for (let i=1; i<numbers.length; i++){
        if (numbers[i]>order_data){
            order_data = numbers[i];
        }
    }
    return(order_data);
}


console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

