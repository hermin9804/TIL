import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class  MyApp extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
		return MaterialApp(
			home: Scaffold(
				appBar: AppBar(title: Text('apps'),),
				body: Row(
					children: [
						Text('hello'),
					],
				),
				bottomNavigationBar: BottomNavigationBar(
					items: [
						new BottomNavigationBarItem(
							icon: Icon(Icons.phone),
							title: Text(''),
						),
						new BottomNavigationBarItem(
							icon: Icon(Icons.message),
							title: Text(''),
						),
						new BottomNavigationBarItem(
							icon: Icon(Icons.contact_page),
							title: Text(''),
						),
					],
				),
			)
		);
	}
}
