class Role extends egret.DisplayObjectContainer{
      public _person:egret.Bitmap=new egret.Bitmap();
      private _State:State;
      private idlelist:string[]=[];
      private walklist:string[]=[];
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
      public call(idlelist:string[],walklist:string[]){
            this.idlelist=idlelist;
            this.walklist=walklist;

            this._person=this.createBitmapByName("NPC01_01_png")
            this.setAnchor(this._person);
            this.addChild(this._person);
            var idle:Idle=new Idle (this,this.idlelist);
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