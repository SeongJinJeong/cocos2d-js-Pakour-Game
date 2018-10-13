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


### First Step!
1. src/resource.js 파일을 전부 지우고 다시 작성해 준다.
```javascript
var res = {
    helloBG_png : "res/helloBG.png",
    start_n_png : "res/start_n.png",
    start_s_png : "res/start_s.png"
};

var g_resources = [
    //image
    res.helloBG_png,
    res.start_n_png,
    res.start_s_png
];
```
resource.js 파일은 res파일에 있는 이미지를 불러오는데 쓰인다.

2. src/app.js 파일을 전부 지우고 다시 작성해 준다.

```javascript
var MenuLayer = cc.Layer.extend({
    ctor : function(){
        //1. super 클래스의 ctor function 불러온다.
        this._super();
    },
    init:function(){
        //super 클래스의 super function 을 불러온다.
        this._super();

        //2. 게임화면의 크기를 불러온다.
        var winsize = cc.director.getWinSize();

        //3. 중간지점을 지정해 준다.
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. 3번의 중간지점을 이용해 이미지를 불러온다음 중간에 위치시킨다.
        var spritebg = new cc.Sprite(res.helloBG_png);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        //5.
        cc.MenuItemFont.setFontSize(60);

        //6.메뉴를 만든다음 onPlay 콜백 이벤트를 배치시킨다.
        var menuItemPlay = new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), // select state image
            this.onPlay, this);
        var menu = new cc.Menu(menuItemPlay);  //7. create the menu
        menu.setPosition(centerpos);
        this.addChild(menu);
    },

    onPlay : function(){
        cc.log("==onplay clicked");
    }
});
```

#### 현재 모든 Layer를 완성시켰으니 이제 레이어들을 합쳐 Scene을 구성하면 된다.

3. Scene 만들기!

```javascript
var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});
```
Scene이 생성되면 onEnter function을 선언해야 한다. Ctor fucntion 도 선언할 수 있고, 선언하게 된다면 onEnter function은 Ctor 다음에 실행된다.