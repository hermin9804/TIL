import 'package:flutter/material.dart';
import 'package:recipes/recipe.dart';
import 'package:recipes/recipe_detail.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      home: MyHomePage(),
    );
  }
}

class  MyHomePage extends StatelessWidget {
	MyHomePage({Key? key}) : super(key: key);

	@override
	Widget build(BuildContext context) {
		return Scaffold(
			appBar: AppBar(
				title: Text("Tis is the Recipes App"),
			),
			body: ListView.builder(
				itemBuilder: (contxt, index) {
					return GestureDetector(
						onTap: () {
							Navigator.of(context)
								.push(MaterialPageRoute(builder: (context) {
								// TODO: return with return RecipeDetail()
								return RecipeDetail(
									recipe: recipes[index],
								);
							}));
						},
						child: BuildRecipeCard(recipes[index]));
				},
				itemCount: recipes.length,
			),
		);
	}

	Widget BuildRecipeCard(Recipe recipe) {
		return Card (
			elevation: 2.0,
			shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
			child: Padding(
				padding: const EdgeInsets.all(16.0),
				child: Column(
					children: [
						Image.asset(recipe.imageUrl),
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

			),

		);
	}
}

