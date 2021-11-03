#include <iostream>

class string
{
	char *str;
	int len;

	public:
		string(char c, int n);
		string(const char *s);
		string(const string &s);
		~string();

		void add_string(const string &s);
		void copy_string(const string &s);
		int strlen();

		void show_status();
};

string::string(char c, int n)
{
	str = new char[n + 1];
	for (int i = 0; i < n; i++)
		str[i] = c;
	len = n;
}

string::string(const char *s)
{
	len = 0;
	while (s[len])
		len++;
	str = new char[len + 1];
	for (int i = 0; i <= len; i++)
		str[i] = s[i];	
}

string::string(const string &s)
{
	len = s.len;

	str = new char[len + 1];
	for (int i = 0; i <= len; i++)
		str[i] = s.str[i];
}

string::~string()
{
	if (str)
		delete[] str;
}

void string::add_string(const string &s)
{
	char *tmp = str; 
	str = new char[len + s.len + 1];
	int i = 0;
	for (i = 0; tmp[i]; i++)
		str[i] = tmp[i];
	for (int j = 0; j <= s.len; j++)
	{
		str[i] = s.str[j];
		i++;
	}
	len += s.len;
}

void string::copy_string(const string &s)
{
	len = s.len;

	str = new char[len + 1];
	for (int i = 0; i <= len; i++)
		str[i] = s.str[i];
}

int string::strlen()
{
	return (len);
}

void string::show_status()
{
	std::cout << "str : " << str << std::endl;
	std::cout << "len : " << len << std::endl;
}

int main(void)
{
	string s1('z', 4);
	s1.show_status();

	string s2("abcdef");
	s2.show_status();

	string s3(s1);
	s3.show_status();

	string s4(s2);
	s4.show_status();

	s1.add_string(s2);
	s1.show_status();

	s1.add_string(s3);
	s1.show_status();

	s1.add_string(s4);
	s1.show_status();

	s3.copy_string(s1);
	s3.show_status();
}
