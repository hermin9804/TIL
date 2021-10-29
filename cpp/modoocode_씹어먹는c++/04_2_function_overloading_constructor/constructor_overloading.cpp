#include <iostream>

class	Date
{
	int year_;
	int month_;
	int day_;

	public:
		void	show_date();

	Date() {
	    std::cout << "기본 생성자 호출!" << std::endl;
	    year_ = 2012;
	    month_ = 7;
	    day_ = 12;
	  }

	  Date(int year, int month, int day) {
	    std::cout << "인자 3 개인 생성자 호출!" << std::endl;
	    year_ = year;
	    month_ = month;
	    day_ = day;
	  }
};

void	Date::show_date()
{
	std::cout << "오늘은 " << year_ << " 년 " << month_ << " 월 " << day_
            << " 일 입니다 " << std::endl;	
}

int	main(void)
{
	Date day = Date();
	Date day2(2012, 10, 31);

	day.show_date();
	day2.show_date();
	
	return (0);
}
