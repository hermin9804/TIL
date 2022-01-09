void main() {
	for (int i = 0; i < 10; i++){
		print(i);
	}
	print ('-------------------');
	List<int> nums = [
		1,
		1,
		2, 
		3,
		5,
		8,
	];

	int sum = 0;
	for (int i = 0; i < nums.length; i++){
		sum += nums[i];
	}
	print(sum);

	print ('-------------------');
	sum = 0;
	for (int num in nums){
		sum += num;
	}
	print(sum);
}
