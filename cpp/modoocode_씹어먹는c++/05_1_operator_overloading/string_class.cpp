#include <iostream>

int strlen(char *str)
{
	int len = 0;
	while (str[len])
		++len;
	return (len);
}

int *make_kmp_table(char *str, int string_length)
{
	int	*kmp_table = new int[string_length];
	int	i = 0;
	int	j = -1;

	kmp_table[0] = -1;
	while (i < string_length)
	{
		while (j > -1 && str[i] != str[j])
			j = kmp_table[j];
		i++;
		j++;
		kmp_table[i] = j;
	}
	return kmp_table;
}

class MyString
{
	char *string_content;	// 문자열 데이터를 가리키는 포인터
	int string_length;	// 문자열 길이
	int memory_capacity;	// 현재 할당된 용량
	int *kmp_table;		// 접두사 / 접미사 반복 테이블

	public:
		MyString(char c);		// 문자 하나로 생성
		MyString(const char *str);	// 문자열로 부터 생성
		MyString(const MyString &str);	// 복사생성자

		~MyString();

		int length() const;
		int capacity() const;
		void reserve(int size);

		void print() const;
		void println() const;

		MyString& assign(const MyString& str);
		MyString& assign(const char* str);

		char at(int i) const;

		MyString& insert(int loc, const MyString& str);
		MyString& insert(int loc, const char* str);
		MyString& insert(int loc, char c);

		MyString& erase(int loc, int num);
		
		int find(int find_from, MyString& str) const;
		int find(int find_from, const char* str) const;
		int find(int find_from, char c) const;

		int kmp_find(int find_from, MyString& str) const; 
		int kmp_find(int find_from, const char* str) const;
		int kmp_find(int find_from, char c) const;

		int compare(const MyString& str) const;
		bool operator==(MyString& str);
};

MyString::MyString(char c)
{
	string_content = new char[1];
	string_content[0] = c;
	memory_capacity = 1;
	string_length = 1;
	kmp_table = make_kmp_table(string_content, string_length);
}

MyString::MyString(const char *str)
{
	string_length = strlen(str);
	memory_capacity = string_length;
	string_content = new char[string_length];

	for (int i = 0; i != string_length; i++)
		string_content[i] = str[i];
	kmp_table = make_kmp_table(string_content, string_length);
}

MyString::MyString(const MyString &str)
{
	string_length = str.string_length;
	memory_capacity = str.string_length;
	string_content = new char[string_length];

	for (int i = 0; i <= string_length; i++)
		string_content[i] = str.string_content[i];
	kmp_table = make_kmp_table(string_content, string_length);
}

MyString::~MyString()
{ 
	delete[] string_content; 
	delete[] kmp_table; 
}
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

MyString& MyString::assign(const MyString& str)
{
	if (str.string_length > memory_capacity)
	{
		delete[] string_content;

		string_content = new char[str.string_length];
		memory_capacity = str.string_length;
	}
	for (int i = 0; i != str.string_length; i++)
		string_content[i] = str.string_content[i];

	string_length = str.string_length;

	return *this;
}

MyString& MyString::assign(const char* str)
{
	int str_length = strlen(str);
	if (str_length >memory_capacity)
	{
		delete[] string_content;

		string_content = new char[str_length];
		memory_capacity = str_length;
	}
	for (int i = 0; i != str_length; i++)
		string_content[i] = str[i];

	string_length = str_length;

	return *this;
}

int MyString::capacity() const { return memory_capacity; }
void MyString::reserve(int size)
{
	if (size > memory_capacity)
	{
		char* prev_string_content = string_content;

		string_content = new char[size];
		memory_capacity = size;
		
		for (int i = 0; i != string_length; i++)
			string_content[i] = prev_string_content[i];

		delete[] prev_string_content;
	}
}

char MyString::at(int i) const
{
	if (i >= string_length || i < 0)
		return ('\0');
	else
		return string_content[i];
}

MyString& MyString::insert(int loc, const MyString& str)
{
	if (loc < 0 || loc > string_length) return *this;

	if (string_length + str.string_length > memory_capacity)
	{
		if (memory_capacity * 2 > string_length + str.string_length)
			memory_capacity *= 2;
		else
			memory_capacity = string_length + str.string_length;

		char* prev_string_content = string_content;
		string_content = new char[memory_capacity];

		int i;
		for (i = 0; i < loc; i++)
			string_content[i] = prev_string_content[i];

		for (int j = 0; j != str.string_length; j++)
			string_content[i + j] = str.string_content[j];
		
		for (; i < string_length; i++)
			string_content[str.string_length + i] = prev_string_content[i];

		delete[] prev_string_content;

		string_length = string_length + str.string_length;
		return *this;
	}

	for (int i = string_length - 1; i >= loc; i--)
		string_content[i + str.string_length] = string_content[i];
	
	for (int i = 0; i < str.string_length; i++)
		string_content[i + loc] = str.string_content[i];

	string_length = string_length + str.string_length;

	return *this;
}

MyString& MyString::insert(int loc, const char* str)
{
	MyString temp(str);
	return insert(loc, temp);
}

MyString& MyString::insert(int loc, char c)
{
	MyString temp(c);
	return insert(loc, temp);
}

MyString& MyString::erase(int loc, int num)
{
	if (num < 0 || loc < 0 || loc + num > string_length || loc > string_length) return *this;

	for (int i = loc + num; i < string_length; i++)
		string_content[i - num] = string_content[i];
	
	string_length -= num;
	return *this;
}

int MyString::find(int find_from, MyString& str) const 
{
	int i, j;
	if (str.string_length == 0) 
		return -1;
	for (i = find_from; i <= string_length - str.string_length; i++)
	{
		for (j = 0; j < str.string_length; j++)
		{
			if (string_content[i + j] != str.string_content[j])
				break;
		}
		if (j == str.string_length)
			return i;
	}
	return -1;
}

int MyString::find(int find_from, const char* str) const
{
	MyString temp(str);
	return find(find_from, temp);
}

int MyString::find(int find_from, char c) const
{
	MyString temp(c);
	return find(find_from, temp);
}

int MyString::kmp_find(int find_from, MyString& str) const
{
	int	i  = find_from;
	int	j = 0;
	int	position = - 1;

	while (i < string_length)
	{
		while (j >= 0 && string_content[i] != str.string_content[j])
			j = str.kmp_table[j];
		i++;
		j++;
		if (j == str.string_length)
		{
			position = i - j;
			break ;
		}
	}
	return position;
}

int MyString::kmp_find(int find_from, const char* str) const
{
	MyString temp(str);
	return kmp_find(find_from, temp);
}

int MyString::kmp_find(int find_from, char c) const
{
	MyString temp(c);
	return kmp_find(find_from, temp);
}

int MyString::compare(const MyString& str) const
{
	for (int i = 0; i < std::min(string_length, str.string_length); i++)
	{
		if (string_content[i] > str.string_content[i])
			return 1;
		else if (string_content[i] < str.string_content[i])
			return -1;
	}
	if (string_length == str.string_length)
		return 0;
	if (string_length > str.string_length)
		return 1;
	return -1;
}

bool MyString::operator==(MyString& str)
{
	return !compare(str);
}

int main(void)
{
	MyString str1("a word");
	MyString str2("sentence");
	MyString str3("sentence");

	if (str1 == str2)
		std::cout << "str1 와 str2 같다." << std::endl;
	else
		std::cout << "st1 와 str2 는 다르다." << std::endl;

	if (str2 == str3)
		std::cout << "str2 와 str3 는 같다." << std::endl;
	else
		std::cout << "st2 와 str3 는 다르다" << std::endl;
	return (0);
}
