void main() {
	int number1 = 1;
	int number2 = 2;

	print(number1 < number2);
	print(number1 > number2);
	print(number1 <= number2);
	print(number1 >= number2);

	print(number1 == number2);
	print(number1 != number2);

	print('-------------');

	print(number1 is int);
	print(number1 is String);
	print(number1 is bool);
	print(number1 is! String);

	print('-------------');

	bool result = 12 > 10 && 1 > 0;
	print (result);
	result = 12 > 10 && 1 < 0;
	print (result);
	result = 12 > 10 || 1 < 0;
	print (result);
	result = 12 < 10 || 1 > 0;
	print (result);
}
