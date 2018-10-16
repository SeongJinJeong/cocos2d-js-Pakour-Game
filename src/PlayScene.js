var PlayScene = cc.Scene.extend({
	space:null,
	initPhysics:function(){
		this.space = new cp.Space();
		this.space.gravity = cp.v(0,-350);

		var wallBottom = new cp.SegmentShape(this.space.staticBody,
			cp.v(0,g_groundHeight),
			cp.v(4294967295,g_groundHeight),
			0);
		this.space.addStaticShape(wallBottom);
	},
	update:function(){
		this.space.step(dt);
	},
	ctor:function(space){
		this._super();
		this.space=space;
		this.init();
	},
    onEnter:function () {
        this._super();
        this.initPhysics();

        this.addChild(new BackgroundLayer());
        this.addChild(new AnimationLayer(this.space));
        this.addChild(new StatusLayer());

        this.scheduleUpdate();
    }
});