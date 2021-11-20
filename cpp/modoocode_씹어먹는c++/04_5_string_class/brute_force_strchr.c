#include <stdio.h>
#include <string.h>

int	brute_force_strchr(char *s1, char *s2)
{
	int	i;
	int	find;

	i = 0;
	find = 0;
	while (s1[i])
	{
		while (s1[i + find] == s2[find])
		{
			if (find == strlen(s2))
				return (i);
			++find;
		}
		++i;
		find = 0;
	}
	return (0);
}

int	main()
{
	int count = 0;
	char str[] = "abcabdabcabca";
	char find[] = "abca";

	printf("%d\n", brute_force_strchr(str, find));
	return (0);
}
