void main() {
	Map dictionary = {
		'apple' : '사과',
		'banana' : '바나나',
		'watermelon' : '수박',
	};

	print(dictionary['apple']);
	print(dictionary['banana']);


	print('-------------');

	Map dictionary2 = {};

	print(dictionary2);
	dictionary2.addAll({
		'apple' : '사과',
		'banana' : '바나나',
		'watermelon' : '수박',
	});

	print(dictionary2);
	dictionary2.remove('apple');
	print(dictionary2);

	dictionary2['banana']  = 'hermin';
	print(dictionary2);

	print('-------------');
	Map dictionary3 = new Map.from({
		'apple' : '사과',
		'banana' : '바나나',
	});
	print(dictionary3.keys.toList());
	print(dictionary3.values.toList());

	print('-------------');
	Map<String, int> price = {
		'apple' : 2000,
		'banana' : 4000,
		'watermelon' : 6000,
	};
	print(price.keys.toList());
	print(price.values.toList());
}
