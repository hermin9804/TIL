void main() {
	int n = 20;

	if (n % 4 == 0)
		print('4의 배수입니다');
	else if (n % 4 == 1)
		print('나머지가 1입니다');
	else
		print('어떤 조건에도 맞지 않습니다.');


	switch (n % 4){
		case 0:
			print('4의 배수 입니다.');
			break;
		case 1:
			print('나머지가 1입니다');
			break;
		default:
			print('어떤 조건에도 맞지 않습니다.');
	}
}
