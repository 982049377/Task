var NPC = (function (_super) {
    __extends(NPC, _super);
    function NPC(name, idle, walk) {
        _super.call(this);
        this._tasklist = [];
        this._name = name;
        this._role = new Role(idle, walk);
        this._role.firstCreat();
        this.addChild(this._role);
        var label = new egret.TextField();
        label.text = this._name;
        this.addChild(label);
        label.x = -30;
        label.y = 70;
        label.$setTextColor(0X00000);
        label.size = 40;
        this.taskresponse = new egret.Bitmap();
        this.taskresponse.scaleX = 0.5;
        this.taskresponse.scaleY = 0.5;
        this.taskresponse.x = -50;
        this.taskresponse.y = -180;
        this.addChild(this.taskresponse);
    }
    var d = __define,c=NPC,p=c.prototype;
    p.onchange = function (task) {
        for (var _i = 0, _a = this._tasklist; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.getid() == task.getid()) {
                if (s.getsender() == this._name)
                    console.log(this._name + ":发出任务");
                if (s.getreceiver() == this._name)
                    console.log(this._name + ":完成任务");
                this.responseTask();
            }
        }
    };
    p.addTask = function (task) {
        this._tasklist.push(task);
    };
    p.responseTask = function () {
        /**缺最优算法 */
        for (var _i = 0, _a = this._tasklist; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.getstatus() == statusType.Unacceptable) {
                this.taskresponse.texture = RES.getRes("0_png");
            }
            if (s.getsender() == this._name && s.getstatus() == statusType.Acceptable) {
                this.taskresponse.texture = RES.getRes("1_png");
            }
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Working) {
                this.taskresponse.texture = RES.getRes("2_png");
            }
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Cancomplete) {
                this.taskresponse.texture = RES.getRes("3_png");
            }
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Complete) {
                this.taskresponse.texture = RES.getRes("4_png");
            }
        }
    };
    return NPC;
}(egret.DisplayObjectContainer));
egret.registerClass(NPC,'NPC',["Observer"]);
var TaskPanel = (function () {
    function TaskPanel() {
        this._tasklist = [];
    }
    var d = __define,c=TaskPanel,p=c.prototype;
    p.onchange = function (task) {
        for (var _i = 0, _a = this._tasklist; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.getsender == task.getsender)
                console.log(this + "发出任务");
            if (s.getreceiver == task.getreceiver)
                console.log(this + "完成任务");
        }
    };
    return TaskPanel;
}());
egret.registerClass(TaskPanel,'TaskPanel',["Observer"]);
//# sourceMappingURL=NPC.js.map