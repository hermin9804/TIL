import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class  MyApp extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
		return MaterialApp(
			home: Center(
				child: Container( width: 50, height: 50, color: Colors.blue,),
			)
		);
	}
}
