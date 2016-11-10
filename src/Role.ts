class Role extends egret.DisplayObjectContainer{
      public _person:egret.Bitmap=new egret.Bitmap();
      private _State:State;
      private idle:string[]=[];
      private walk:string[]=[];
      public constructor(idle:string[],walk:string[]) {
            super();
            this.idle=idle;
            this.walk=walk;
      }
      public SetState(e:State){
            if(this._State!=e){
                this._State.onExit();
            }
            this._State=e;
            this._State.onEnter();
        }
      public firstCreat(){
            this._person=this.createBitmapByName("10000_png")
            this.setAnchor(this._person);
            this.addChild(this._person);
            var idle:Idle=new Idle (this,this.idle);
            this._State=idle;
            this._State.onEnter();
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