#include <iostream>

int	main(void)
{
	int	my_num;
	int	ges_num;

	my_num = 3;
	while (1)
	{
		std::cout << "입력 : ";
		std::cin >> ges_num;
		if (my_num == ges_num)
		{
			std::cout << "정답!!" << std::endl;
			break;
		}
		else
		{
			std::cout << "다시 생각해보세요~!" << std::endl;
		}
	}
	return (0);
}
