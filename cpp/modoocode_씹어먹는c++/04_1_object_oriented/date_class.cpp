#include <iostream>

class Date
{
	int year_;
	int month_;
	int day_;
	
	public:
		void	set_date(int year, int month, int day)
		{
			year_ = year;
			month_ = month;
			day_ = day;
		}
		void	add_day(int inc)
		{
			day_ += inc;
			int is_right_day = 0;
			while (!is_right_day)
			{
				if (month_ == 2)
				{
					//윤년	
					if ((year_ % 400 == 0) || (year_ % 4 == 0 && year_ % 100 != 0))
					{
						if (day_ > 29)
						{
							month_ += 1;
							day_ -= 29;
							if (day_ <= 31)
								is_right_day = 1;
						}
						else
							is_right_day = 1;
					}
					else
					{
						if (day_ > 28)
						{
							month_ += 1;
							day_ -= 28;
							if (day_ <= 31)
								is_right_day = 1;
						}
						else
							is_right_day = 1;
					}

				}
				else if (month_ == 1 || month_ == 3 || month_ == 5 || month_ == 7
						|| month_ == 8 || month_ == 10 || month_ == 12)
				{
					if (day_ > 31)
					{
						month_ += 1;
						day_ -= 31;
						if (day_ <= 30)
							is_right_day = 1;
						if (month_ == 2 && day_ <= 28)
							is_right_day = 1;
					}
					else
						is_right_day = 1;
				}
				else
				{
					if (day_ > 30)
					{
						month_ += 1;
						day_ -= 30;
					}
					else
						is_right_day = 1;
				}
			}
		}
		void	add_month(int inc)
		{
			month_ += inc;
			while (month_ > 12)
			{
				year_ += 1;
				month_ -= 12;
			}
		}
		void	add_year(int inc)
		{
			year_ += inc;
		}

		void	show_date()
		{
			std::cout << "year  : " << year_ << "\nmonth : " << month_ << "\nday   : " << day_ << std::endl;
		}
};

int main() 
{
  Date day;
  day.set_date(2011, 3, 1);
  day.show_date();

  day.add_day(30);
  day.show_date();

  day.add_day(2000);
  day.show_date();

  day.set_date(2012, 1, 31);  // 윤년
  day.add_day(29);
  day.show_date();

  day.set_date(2012, 8, 4);
  day.add_day(2500);
  day.show_date();
  return 0;
}

/*int main(void)
{
	Date date;
	date.set_date(2000, 2, 29);
	date.add_day(62);
	date.add_month(0);
	date.add_year(0);

	date.show_date();
	return (0);
}*/
