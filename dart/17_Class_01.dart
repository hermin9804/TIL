void main() {
	// OOP - Object Oriented Programming 
	// 객체지향 프로그래밍

	// Instantiation 인스턴스화
	// Instance 인스턴스
	Idol seulgi = new Idol (
			'seulgi',
			'redvelbat',
	);
	seulgi.sayName();
	print(seulgi.name);
	print(seulgi.group);

	Idol rm = new Idol.fromMap({
		'name' : 'RM',
		'group : 'BTS',
	})
}

class Idol {
	String name;
	String group;

	Idol(
		String name,
		String group,
	)	: this.name = name,
		  this.group = group;

	Idol.fromMap(
			Map input,
			: this.name = input['name'],
			  this.group = input['group'];
	)

	void sayName() {
		print ('my name is ${this.name}.');
	}
} 
