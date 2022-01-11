void main() {
	// OOP - Object Oriented Programming 
	// 객체지향 프로그래밍

	// Instantiation 인스턴스화
	// Instance 인스턴스
	Car myCar = Car('pink');

	print(myCar.speed(300));
	print(myCar.color);

}

class Car{
	String color = 'red';

	//constructor 주문서 작성 양식
	Car(String clr){
		color = clr;
	}

	int speed(int accel){
		return accel * 2;
	}
}
