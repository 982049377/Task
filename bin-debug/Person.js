var Role = (function (_super) {
    __extends(Role, _super);
    //private _speed:number=1.5;
    //private _astar:Astar;
    //private mapsize=100;
    function Role() {
        _super.call(this);
        this._person = new egret.Bitmap();
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
        this._person = this.createBitmapByName("10000_png");
        this.setAnchor(this._person);
        this.addChild(this._person);
        var idle = new Idle(this);
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
//# sourceMappingURL=Person.js.map