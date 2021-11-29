#include <iostream>

class A
{
	mutable int data_;

	public:
		A(int data) : data_(data) {}//초기화 리스트-생성자 호출과 동시에 멤버변수 초기화
		void DoSomething(int x) const
		{
			data_ = x;
		}

		void PinrtData() const { std::cout << "data: " << data_ << std::endl; }
};

int main()
{
	A a(10);
	a.DoSomething(3);
	a.PinrtData();
	return (0);
}

// mutable 을 쓸바에는 그냥 DoSomthing() 에서 const 를 떼어버리는 게낫지 않을까?
//
// mutable 을 사용하는 이유!
// const로 정의되어야 마땅한 함수도 내부값을 변경 할 수도 있기 때문
