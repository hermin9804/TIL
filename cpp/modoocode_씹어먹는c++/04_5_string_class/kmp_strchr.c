#include <stdio.h>
#include <string.h>

void	make_table(char *pattern, int *table)
{
	int	i = 0;
	int	j = -1;

	table[0] = -1;
	while (i < strlen(pattern))
	{
		while (j > -1 && pattern[i] != pattern[j])
			j = table[j];
		i++;
		j++;
		table[i] = j;
	}
}

int	kmp(char *text, int start, char *pattern)
{
	int	i;
	int	j;
	int	position;
	int	table[512];

	i = start;
	j = 0;
	position = -1;
	make_table(pattern, table);
	while (i < strlen(text))
	{
		while (j >= 0 && text[i] != pattern[j])
			j = table[j];
		i++;
		j++;
		if (j == strlen(pattern))
		{
			position = i - j;
			break ;
		}
	}
	return (position);
}

int	main()
{
	char text[] = "abcabcabcdabc";
	char pattern[] = "abcd";

	printf("%d\n", kmp(text, 0, pattern));
	return (0);
}
