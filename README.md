## cocos2d-js 로 파쿠르 게임 만들기!
### cocos2d의 개념
cocos2d는 Sprite(스프라이트),Layer(레이어),Scene(씬)으로 이루어져 있다.
Sprite는 하나의 개체 ex) 버튼, 글자, 이미지 등 으로 이루어져 있다.
이 스프라이트들을 합쳐 하나의 층을 만들수 있는데 그 층을 Layer라고 한다.
Layer는 적게는 하나에서 여러개의 스프라이트들로 이루어져 있다.
여러개의 Layer들이 합쳐져 하나의 씬이 구성되게 된다.
Scene은 하나의 장면을 뜻하는데, Scene들이 여러개가 합쳐져 게임이 만들어진다.
예를들어 게임 시작화면을 구성하기 위해 배경 Layer, 동작 Layer, 모션 Layer 를 필요로 한다면
배경 Layer에 이미지 Sprite를 넣고, 동작 Layer에 버튼과 Status Sprite를 넣으며, 모션 Layer에 모션 Sprite를 넣어 각 레이어를 완성시키고, 레이어들을 합쳐 Scene을 만들면 하나의 게임 화면이 완성되는 방식이다.

요약)

Scene Game Start [  Layer Background  {(Sprite(Image))}  +  Layer Status {(Sprite(button))+(Sprite(Text))}  + Layer Motion {(Sprite(Motion))}  ]

+

Scene ....

+

Scene ....

+

....

= 게임 완성!