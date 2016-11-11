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
        this.responseTask();
        this._tasklist = TaskService.getIntance()._tasklist;
    }
    var d = __define,c=NPC,p=c.prototype;
    p.onchange = function (task) {
        this._tasklist = TaskService.getIntance()._tasklist;
        for (var _i = 0, _a = this._tasklist; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.getid() == task.getid()) {
                if (s.getsender() == this._name)
                    console.log(this._name + ":发出任务");
                if (s.getreceiver() == this._name)
                    console.log(this._name + ":完成任务");
            }
        }
        this.responseTask();
    };
    // public addTask(task:Task){
    //     this._tasklist.push(task);
    // }
    //是否身上有未发出的任务
    p.hasSendTask = function () {
        for (var _i = 0, _a = this._tasklist; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.getsender() == this._name && s.getstatus() == statusType.Acceptable) {
                return true;
            }
        }
        return false;
    };
    //是否身上有未接受的任务
    p.hasReceiveTask = function () {
        for (var _i = 0, _a = this._tasklist; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Working) {
                return true;
            }
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Cancomplete) {
                return true;
            }
        }
        return false;
    };
    p.responseTask = function () {
        /**缺最优算法 */
        for (var _i = 0, _a = this._tasklist; _i < _a.length; _i++) {
            var s = _a[_i];
            //任务发出不可接受，没有表情
            if (s.getstatus() == statusType.Unacceptable) {
                this.taskresponse.texture = RES.getRes("0_png");
                console.log("0.png");
            }
            //任务发出可接受，蓝色问号
            if (s.getsender() == this._name && s.getstatus() == statusType.Acceptable) {
                this.taskresponse.texture = RES.getRes("1_png");
                console.log("1.png");
            }
            //任务进行中，灰色问号
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Working) {
                this.taskresponse.texture = RES.getRes("2_png");
                console.log("2.png");
            }
            //任务可完成但没提交，金色问号
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Cancomplete) {
                this.taskresponse.texture = RES.getRes("3_png");
                console.log("3.png");
            }
            //任务提交完成，没有表情
            if (s.getreceiver() == this._name && s.getstatus() == statusType.Complete) {
                this.taskresponse.texture = RES.getRes("0_png");
                console.log("0.png");
            }
        }
        if (!this.hasSendTask() && !this.hasReceiveTask())
            this.taskresponse.texture = RES.getRes("0_png");
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