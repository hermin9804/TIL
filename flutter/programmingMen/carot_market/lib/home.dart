import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  Home ({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Map<String, String>> datas = [];

  @override
  void initState() {
    super.initState();
    datas = [
      {
        "image": "assets/images/ara-1.jpg",
        "title": "네메시스 축구화275",
        "location": "제주 제주시 아라동",
        "price": "30000",
        "likes": "2"
      },
      {
        "image": "assets/images/ara-2.jpg",
        "title": "LA갈비 5kg팔아요~",
        "location": "제주 제주시 아라동",
        "price": "100000",
        "likes": "5"
      },
      {
        "image": "assets/images/ara-3.jpg",
        "title": "치약팝니다",
        "location": "제주 제주시 아라동",
        "price": "5000",
        "likes": "0"
      },
      {
        "image": "assets/images/ara-4.jpg",
        "title": "[풀박스]맥북프로16인치 터치바 스페이스그레이",
        "location": "제주 제주시 아라동",
        "price": "2500000",
        "likes": "6"
      },
      {
        "image": "assets/images/ara-5.jpg",
        "title": "디월트존기임팩",
        "location": "제주 제주시 아라동",
        "price": "150000",
        "likes": "2"
      },
      {
        "image": "assets/images/ara-6.jpg",
        "title": "갤럭시s10",
        "location": "제주 제주시 아라동",
        "price": "180000",
        "likes": "2"
      },
      {
        "image": "assets/images/ara-7.jpg",
        "title": "선반",
        "location": "제주 제주시 아라동",
        "price": "15000",
        "likes": "2"
      },
      {
        "image": "assets/images/ara-8.jpg",
        "title": "냉장 쇼케이스",
        "location": "제주 제주시 아라동",
        "price": "80000",
        "likes": "3"
      },
      {
        "image": "assets/images/ara-9.jpg",
        "title": "대우 미니냉장고",
        "location": "제주 제주시 아라동",
        "price": "30000",
        "likes": "3"
      },
      {
        "image": "assets/images/ara-10.jpg",
        "title": "멜킨스 풀업 턱걸이 판매합니다.",
        "location": "제주 제주시 아라동",
        "price": "50000",
        "likes": "7"
      },
    ];
  }

  AppBar _appbarWidget() => AppBar(
      backgroundColor: Colors.white,
      title: GestureDetector(
        onTap: (){
          print("click title");
        },
        child: Row(
          children: const [
            Text("아라동",),
            Icon(Icons.arrow_drop_down),
          ],
        ),
      ),
      elevation: 1,
      centerTitle: false,
      actions: [
        IconButton(onPressed: (){print("click search");}, icon: Icon(Icons.search),),
        IconButton(onPressed: (){print("click tune");}, icon: Icon(Icons.tune),),
        IconButton(onPressed: (){print("click notifications");}, icon: Icon(Icons.notifications_outlined),),
      ],
    );

  Widget _bodyWidget() {
    return ListView.separated(
      itemBuilder: (BuildContext _context, int index){
        return Container(
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.all(Radius.circular(50)),
                  child: Image.asset(datas[index]["image"].toString()),
                ),
                Text(index.toString()),
              ],
            ),
        );
      },
      itemCount: datas.length,
      separatorBuilder: (BuildContext _context, int index) {
        return Container(
            height: 1,
            color: Colors.black.withOpacity(0.4),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _appbarWidget(),
      body: _bodyWidget(),
     // bottomNavigationBar: Container(),
    );
  }
}