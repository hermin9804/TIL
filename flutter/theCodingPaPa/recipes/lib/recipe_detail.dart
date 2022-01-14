import 'package:flutter/material.dart';
import 'package:recipes/recipe.dart';

class  RecipeDetail extends StatefulWidget {
	final Recipe recipe;
	const RecipeDetail({Key? key, required this.recipe}) : super(key: key);

  @override
  State<RecipeDetail> createState() => _RecipeDetailState();
}

class _RecipeDetailState extends State<RecipeDetail> {
	int _sliderVal = 1;

	@override
	Widget build(BuildContext context) {
		return Scaffold(
			appBar: AppBar(title: Text(widget.recipe.label),),
			body: SafeArea(
			  child: Column(
			  	children: [
			  		SizedBox(
			  			width:double.infinity,
			  			height: 300,
			  			child: Image.asset(widget.recipe.imageUrl)
			  		),
			  		const SizedBox(
			  			height: 10,
			  		),
			  		Text(
			  			widget.recipe.label,
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
			  					Ingredient ingredient = widget.recipe.ingredients[index];
			  					return Text(
										'${ingredient.quantity * _sliderVal} ${ingredient.measure} ${ingredient.name}',
										textScaleFactor: 1.2,
									);
			  				},
			  				itemCount: widget.recipe.ingredients.length,
			  			)
			  		),
			  		Slider(
			  			min: 1,
			  			max: 10,
			  			divisions: 10,
			  			value: _sliderVal.toDouble(),
			  			onChanged: (double newValue){
			  			  setState(() {
			  			    _sliderVal = newValue.round();
			  			  });
			  			},
			  			activeColor: Colors.green,
			  			inactiveColor: Colors.grey,
							label: "${_sliderVal * widget.recipe.servings} servings",
			  		),
			  	],
			  ),
			),
		);
	}
}
