var NPC = (function () {
    function NPC(name) {
        this._tasklist = [];
        this._name = name;
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
            }
        }
    };
    p.addTask = function (task) {
        this._tasklist.push(task);
    };
    return NPC;
}());
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