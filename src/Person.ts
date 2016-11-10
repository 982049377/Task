class Role extends egret.DisplayObjectContainer{
      public _role:egret.Bitmap=new egret.Bitmap();
      private _State:State;
      
      public constructor() {
            super();
      }
      public SetState(e:State){
            if(this._State!=e){
                this._State.onExit();
            }
            this._State=e;
            this._State.onEnter();
      }
      public firstCreat(){
            this._role=this.createBitmapByName("10000_png")
            this.setAnchor(this._role);
            this.addChild(this._role);
            var idle:Idle=new Idle (this);
            this._State=idle;
            this._State.onEnter();
            console.log("人物创建");
      }
        public createBitmapByName(name:string):egret.Bitmap {
            var result = new egret.Bitmap();
            var texture:egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }
        private setAnchor(e:egret.Bitmap)
        {
            e.$setAnchorOffsetX(e.width/2);
            e.$setAnchorOffsetY(e.height/2);
        }

}