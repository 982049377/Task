var DialoguePanel = (function (_super) {
    __extends(DialoguePanel, _super);
    function DialoguePanel() {
        _super.call(this);
        this.texturelist = {
            "接受": "UI01_png",
            "退出": "UI02_png",
            "提交": "UI03_png",
            "不能提交": "UI04_png",
            "放弃": "UI05_png",
            "不能放弃": "UI06_png",
            "不能接受": "UI07_png"
        };
        this._container = new egret.DisplayObjectContainer();
        this._container.width = 300;
        this._container.height = 425;
        this._textfield = new egret.TextField();
        this._textfield.size = 36;
        this._textfield.width = 220;
        this._textfield.height = 345;
        this._textfield.$setTextColor(0X00000);
        this._textfield.x = 40;
        this._textfield.y = 40;
        this._firstbutton = new egret.Bitmap();
        this._firstbutton.scaleX = 0.4;
        this._firstbutton.scaleY = 0.4;
        this._firstbutton.x = 40;
        this._firstbutton.y = 345;
        this._giveUpButton = new egret.Bitmap();
        this._giveUpButton.scaleX = 0.4;
        this._giveUpButton.scaleY = 0.4;
        this._giveUpButton.x = 110;
        this._giveUpButton.y = 345;
        this._returnButton = new egret.Bitmap();
        this._returnButton.scaleX = 0.4;
        this._returnButton.scaleY = 0.4;
        this._returnButton.x = 180;
        this._returnButton.y = 345;
        this._background = new egret.Bitmap();
        this._background.width = this._container.width;
        this._background.height = this._container.height;
        this._container.addChild(this._background);
        this._container.addChild(this._textfield);
        this._container.addChild(this._firstbutton);
        this._container.addChild(this._giveUpButton);
        this._container.addChild(this._returnButton);
        this.addChild(this._container);
    }
    var d = __define,c=DialoguePanel,p=c.prototype;
    p.call = function (task, fromself, toself) {
        this._background.texture = RES.getRes("Taskbg_png");
        console.log("Dialogue.call");
        this._textfield.text = task.getname();
        this._textfield.text += "\n";
        this._textfield.text += task.getdris();
        //console.log(this._textfield.text);
        this._firstbutton.texture = RES.getRes(this.getfirsttexture(task, fromself, toself));
        this._giveUpButton.texture = RES.getRes(this.getGiveUpTexture(task, fromself, toself));
        this._returnButton.texture = RES.getRes(this.texturelist["退出"]);
        this.addChild(this._container);
    };
    p.getfirsttexture = function (task, fromself, toself) {
        var str;
        if (task.getstatus() == statusType.Acceptable && fromself)
            str = this.texturelist["接受"];
        if (task.getstatus() == statusType.Unacceptable && fromself)
            str = this.texturelist["不能接受"];
        if (task.getstatus() == statusType.Cancomplete && toself)
            str = this.texturelist["提交"];
        if (task.getstatus() == statusType.Working && toself)
            str = this.texturelist["不能提交"];
        if (task.getstatus() == statusType.Acceptable && toself)
            str = this.texturelist["不能提交"];
        if (task.getstatus() == statusType.Unacceptable && toself)
            str = this.texturelist["不能提交"];
        return str;
    };
    p.getGiveUpTexture = function (task, fromself, toself) {
        var str;
        if (task.getstatus() == statusType.Acceptable && fromself)
            str = this.texturelist["不能放弃"];
        if (task.getstatus() == statusType.Acceptable && !fromself)
            str = this.texturelist["不能放弃"];
        if (task.getstatus() == statusType.Working && fromself)
            str = this.texturelist["放弃"];
        if (task.getstatus() == statusType.Working && !fromself)
            str = this.texturelist["不能放弃"];
        if (task.getstatus() == statusType.Cancomplete && fromself)
            str = this.texturelist["放弃"];
        if (task.getstatus() == statusType.Cancomplete && !fromself)
            str = this.texturelist["不能放弃"];
        if (task.getstatus() == statusType.Working && toself)
            str = this.texturelist["放弃"];
        if (task.getstatus() == statusType.Working && toself)
            str = this.texturelist["不能放弃"];
        if (task.getstatus() == statusType.Cancomplete && toself)
            str = this.texturelist["放弃"];
        if (task.getstatus() == statusType.Cancomplete && !toself)
            str = this.texturelist["不能放弃"];
        return str;
    };
    return DialoguePanel;
}(egret.DisplayObjectContainer));
egret.registerClass(DialoguePanel,'DialoguePanel');
//# sourceMappingURL=DialoguePanel.js.map