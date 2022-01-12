import 'package:flutter/material.dart';
import 'package:recipes/recipe.dart';

class  RecipeDetail extends StatelessWidget {
	final Recipe recipe;
	const RecipeDetail({Key? key, required this.recipe}) : super(key: key);

	@override
	Widget build(BuildContext context) {
		return Scaffold(
			appBar: AppBar(title: Text(recipe.label),),
			body: Column(
				children: [
					SizedBox(
						width:double.infinity,
						height: 300,
						child: Image.asset(recipe.imageUrl)
					),
					const SizedBox(
						height: 10,
					),
					Text(
						recipe.label,
						style: const TextStyle(
							fontSize: 20.0,
							fontWeight: FontWeight.w700,
							fontFamily: 'palatino'),
					)
				],
			),
		);
	}
}
