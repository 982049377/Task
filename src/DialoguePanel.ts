class DialoguePanel {
    private _textfield:egret.TextField;
    private _firstbutton:egret.Bitmap;
    private _giveUpButton:egret.Bitmap;
    private _returnButton:egret.Bitmap;

    private texturelist:{[index:string]:string}={
        "接受":"UI01_png",
        "退出":"UI02_png",
        "提交":"UI01_png",
        "不能提交":"UI01_png",
        "放弃":"UI01_png",
        "不能放弃":"UI01_png",
        "不能接受":"UI07_png"
    }
    public constructor(){
        this._textfield=new egret.TextField();
        this._firstbutton=new egret.Bitmap();
        this._giveUpButton=new egret.Bitmap();
        this._returnButton=new egret.Bitmap();
    }
    public call(task:Task,fromself:boolean,toself:boolean){
        this._textfield.text=task.getname();
        this._textfield.text+="\n";
        this._textfield.text+=task.getdris();
        this._firstbutton.texture=RES.getRes(this.getfirsttexture(task,fromself,toself));
        this._giveUpButton.texture=RES.getRes(this.getGiveUpTexture(task,fromself,toself));
        this._returnButton=RES.getRes("UI02_png");
    }
    private getfirsttexture(task:Task,fromself:boolean,toself:boolean):string{
        var str:string;
        if(task.getstatus()==statusType.Acceptable && fromself)
            str=this.texturelist["接受"];
        if(task.getstatus()==statusType.Unacceptable && fromself)
            str=this.texturelist["不能接受"];
        if(task.getstatus()==statusType.Cancomplete && toself)
            str=this.texturelist["提交"];
        if(task.getstatus()==statusType.Working && toself)
            str=this.texturelist["不能提交"];
        return str;
    }
    private getGiveUpTexture(task:Task,fromself:boolean,toself:boolean):string{
        var str:string;
        if(task.getstatus()==statusType.Working && fromself)
            str=this.texturelist["放弃"];
        if(task.getstatus()==statusType.Working && !fromself)
            str=this.texturelist["不能放弃"];
        if(task.getstatus()==statusType.Cancomplete && fromself)
            str=this.texturelist["放弃"];
        if(task.getstatus()==statusType.Cancomplete && !fromself)
            str=this.texturelist["不能放弃"];
         if(task.getstatus()==statusType.Working && toself)
            str=this.texturelist["放弃"];
        if(task.getstatus()==statusType.Working && toself)
            str=this.texturelist["不能放弃"];
        if(task.getstatus()==statusType.Cancomplete && toself)
            str=this.texturelist["放弃"];
        if(task.getstatus()==statusType.Cancomplete && !toself)
            str=this.texturelist["不能放弃"];
        return str;
    }
}