var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        _super.call(this);
        this._role = new egret.Bitmap();
    }
    var d = __define,c=Role,p=c.prototype;
    p.SetState = function (e) {
        if (this._State != e) {
            this._State.onExit();
        }
        this._State = e;
        this._State.onEnter();
    };
    p.firstCreat = function () {
        this._role = this.createBitmapByName("10000_png");
        this.setAnchor(this._role);
        this.addChild(this._role);
        var idle = new Idle(this);
        this._State = idle;
        this._State.onEnter();
        console.log("人物创建");
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.setAnchor = function (e) {
        e.$setAnchorOffsetX(e.width / 2);
        e.$setAnchorOffsetY(e.height / 2);
    };
    return Role;
}(egret.DisplayObjectContainer));
egret.registerClass(Role,'Role');
//# sourceMappingURL=Person.js.map