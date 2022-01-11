void main() {
	List<int> testList = [
		1,
		1,
		2,
		3,
		5,
		8
	];
	int result = addList(testList, 1);
	print(result);

	List<int> testList2 = [
		10,
		20,
		30,
		40,
		50,
	];
	result = addList(testList2, 1, c : 4);
	print(result);
}

int addList(List<int> testList, int a, {
	int b = 0,
	int c = 0,
	int d = 0,
	}) {
	print ('$b $c $d');
	int total = 0;

	for (int number in testList) {
		total += number;
	}
	return (total);
}
