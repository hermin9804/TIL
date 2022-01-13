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
							fontFamily: 'palatino'
						),
					),
					Expanded(
						child: ListView.builder(
							shrinkWrap: true,
							padding: const EdgeInsets.all(8),
							itemBuilder: (context, index) {
								Ingredient ingredient = recipe.ingredients[index];
								return Text('${ingredient.quantity} ${ingredient.measure} ${ingredient.name}');
							},
							itemCount: recipe.ingredients.length,
						)
					),
				],
			),
		);
	}
}
