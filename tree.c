#include <stdio.h>
#include <unistd.h>

int	main(void)
{
	int r = 1;
	printf ("                                       👨🏻‍💻👩🏻‍⚕️ \n");
	printf ("                                        ⭐️ \n");
	for (int i = 0; i < 20; i++)
	{
		for (int j = 20; j - i > 0; j--)
		{
			printf("  ");
		}
		usleep(50000);
		for (int k = 0; k <= i * 2; k++)
		{
			if ((k % 5 == 0 && k != 0) || k % 3 == 0)
				printf("💚");
			else
				printf("🤍");
		}
		usleep(50000);
		printf("\n");
		for (int j = 20; j - i > 0; j--)
		{
			printf("  ");
		}
		usleep(50000);
		for (int k = 0; k <= i * 2; k++)
		{
			if (k % 7 == 0 && r % 2 == 0)
				printf("❤️ ");
			else
				printf("🤍");
		}
		usleep(50000);
		printf("\n");
		r++;
	}
	printf ("                                  🤎🤎🤎🤎🤎🤎🤎\n");
	usleep(100000);
	printf ("                                  🤎🤎🤎🤎🤎🤎🤎\n");
	usleep(100000);
	printf ("                                  🤎🤎🤎🤎🤎🤎🤎\n");
	usleep(100000);
	printf ("                                  🤎🤎🤎🤎🤎🤎🤎\n");
	usleep(100000);
	printf ("                                  🤎🤎🤎🤎🤎🤎🤎\n");
	usleep(100000);
	printf ("                           🎁 🎁  🤎🤎🤎🤎🤎🤎🤎  🌰🐿 \n");
	usleep(100000);
	return (0);
}
