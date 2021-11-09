#include <iostream>

int strlen(char *str)
{
	int len = 0;
	while (str[len])
		++len;
	return (len);
}

class MyString
{
	char *string_content;
	int string_length;

	public:
		MyString(char c);
		MyString(const char *str);
		MyString(const MyString &str);

		~MyString();

		int length() const;

		void print() const;
		void println() const;

		/*void add_string(const string &s);
		void copy_string(const string &s);
		int strlen();

		void show_status();*/
};

MyString::MyString(char c)
{
	string_content = new char[1];
	string_content[0] = c;
}

MyString::MyString(const char *str)
{
	string_length = strlen(str);
	string_content = new char[string_length];
	for (int i = 0; i != string_length; i++)
		string_content[i] = str[i];
}

MyString::MyString(const MyString &str)
{
	string_length = str.string_length;
	string_content = new char[string_length];

	for (int i = 0; i <= string_length; i++)
		string_content[i] = str.string_content[i];
}

MyString::~MyString() { delete[] string_content; }

int MyString::length() const { return string_length; }

void MyString::print() const {
	for (int i = 0; i != string_length; i++)
		std::cout << string_content[i];
}

void MyString::println() const {
	for (int i = 0; i != string_length; i++)
		std::cout << string_content[i];

	std::cout << std::endl;
}

/*void string::add_string(const string &s)
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
}*/

int main(void)
{
	MyString str1("hello world");
	MyString str2(str1);

	str1.println();
	str2.println();

	return (0);
}

