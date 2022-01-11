void main(){
	List redVelvetList = [];
	
	print(redVelvetList);

	redVelvetList.add('a');
	redVelvetList.add('b');
	redVelvetList.add('c');

	print('------------------');
	print(redVelvetList);
	
	redVelvetList.removeAt(1);
	print(redVelvetList);

	redVelvetList[0] = 'hermin';
	print(redVelvetList);
}
