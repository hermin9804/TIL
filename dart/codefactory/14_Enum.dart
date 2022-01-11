enum Status {
	approbed,
	rejected,
	pending,
}

void main() {
	// 승인 approbed
	// 반려 rejected
	// 대기 pending

	Status status = Status.approbed;

	if (status == Status.approbed) {
		print ('승인되었습니다.');
	}else {
		print('반려나 대기 되었습니다.');
	}

	print(Status.values.toList());
}
