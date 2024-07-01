// Assignment 5: Algorithm (Advanced Optional)
// Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.



function twoSum(nums, target) {
	// your code here
	let result = [];
	for (let i = 0; i < nums.length; i++){
		let gap = target - nums[i];	
		//console.log(gap,'= gap');
		if (nums.includes(gap)){ 
			result.push(i);
			result.push(nums.indexOf(gap)); //找到gap後，將自己的索引值丟進result，避免重複循環
			break;
			// console.log(result, "result")
			// console.log(result.indexOf(gap), "索引");
			//indexOf() 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
			//includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
		}

	}
	return result;
}
/*
	For example:
		twoSum([2, 7, 11, 15], 9);
	Should returns:
		[0, 1]
	Because:
		nums[0] + nums[1] is 9
*/

console.log(twoSum([2, 7, 11, 15], 9));
