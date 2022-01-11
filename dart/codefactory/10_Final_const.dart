// final 런타임에 값이 지정이됨
// const 컴파일할때 값이 지정이됨

void main(){
	final DateTime now = DateTime.now();

	print(now);

	Future.delayed(
			Duration(milliseconds: 1000),
			(){
				final DateTime now2 = DateTime.now();

				print(now2);
			}
		);
}
