#include <iostream>

int	main(void)
{
	int	a = 3;
	int&	another_a = a;

	another_a = 5;
	std::cout << "a : " << a << std::endl;
	std::cout << "another_a : " << another_a << std::endl;
	return (0);
}
