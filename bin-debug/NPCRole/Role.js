var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        _super.call(this);
        this._person = new egret.Bitmap();
        this.idlelist = [];
        this.walklist = [];
    }
    var d = __define,c=Role,p=c.prototype;
    p.SetState = function (e) {
        if (this._State != e) {
            this._State.onExit();
        }
        this._State = e;
        this._State.onEnter();
    };
    p.call = function (idlelist, walklist) {
        this.idlelist = idlelist;
        this.walklist = walklist;
        this._person = this.createBitmapByName("NPC01_01_png");
        this.setAnchor(this._person);
        this.addChild(this._person);
        var idle = new Idle(this, this.idlelist);
        this._State = idle;
        this._State.onEnter();
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
//# sourceMappingURL=Role.js.map