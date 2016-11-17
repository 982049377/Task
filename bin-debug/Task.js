var Task = (function () {
    function Task(id, name, dris, fromNpcId, toNpcId, total, condition) {
        this._current = 0;
        this._total = -1;
        this._id = id;
        this._name = name;
        this._dris = dris;
        this._fromNpcId = fromNpcId;
        this._toNpcId = toNpcId;
        this._status = statusType.Acceptable;
        this._total = total;
        this._current = 0;
        this._condition = condition;
    }
    var d = __define,c=Task,p=c.prototype;
    p.getdris = function () {
        return this._dris;
    };
    p.getid = function () {
        return this._id;
    };
    p.getname = function () {
        return this._name;
    };
    p.getfromNpcId = function () {
        return this._fromNpcId;
    };
    p.gettoNpcId = function () {
        return this._toNpcId;
    };
    p.getstatus = function () {
        return this._status;
    };
    p.finish = function () {
        // console.log(this._status);
        this._status = statusType.Complete;
        // console.log(this._status);
        //   this._condition.onsubmit(this);
    };
    p.accept = function () {
        // console.log(this._status);
        this._status = statusType.Working;
        // console.log(this._status);
        this._condition.onAccept(this);
    };
    p.Canaccept = function () {
        // console.log(this._status);
        this._status = statusType.Acceptable;
        // console.log(this._status);
    };
    p.Canfinish = function () {
        // console.log(this._status);
        this._status = statusType.Cancomplete;
        // console.log(this._status);
    };
    p.getcurrent = function () {
        return this._current;
    };
    p.setcurrent = function () {
        this._current++;
        this.CheckStatus();
    };
    p.CheckStatus = function () {
        if (this._status == statusType.Acceptable)
            this._status = statusType.Working;
        if (this._status == statusType.Working) {
            if (this._current >= this._total) {
                console.error(this._name + "的this._current>this._total");
                this._status = statusType.Cancomplete;
            }
            this.em = TaskService.getIntance();
            this.em.notify(this._id);
        }
    };
    return Task;
}());
egret.registerClass(Task,'Task',["TaskConditionContext"]);
var NPCTalkTaskCondition = (function () {
    function NPCTalkTaskCondition() {
    }
    var d = __define,c=NPCTalkTaskCondition,p=c.prototype;
    p.onAccept = function (task) {
        task.setcurrent();
        console.log(task.getcurrent());
    };
    return NPCTalkTaskCondition;
}());
egret.registerClass(NPCTalkTaskCondition,'NPCTalkTaskCondition',["TaskCondition"]);
var KillMonsterTaskCondition = (function () {
    function KillMonsterTaskCondition() {
    }
    var d = __define,c=KillMonsterTaskCondition,p=c.prototype;
    p.onAccept = function (task) {
    };
    // onsubmit(task: TaskConditionContext) {
    // }
    p.onchange = function (task) {
        task.setcurrent();
    };
    return KillMonsterTaskCondition;
}());
egret.registerClass(KillMonsterTaskCondition,'KillMonsterTaskCondition',["TaskCondition","Observer"]);
var statusType;
(function (statusType) {
    statusType[statusType["Unacceptable"] = 0] = "Unacceptable";
    statusType[statusType["Acceptable"] = 1] = "Acceptable";
    statusType[statusType["Working"] = 2] = "Working";
    statusType[statusType["Cancomplete"] = 3] = "Cancomplete";
    statusType[statusType["Complete"] = 4] = "Complete";
})(statusType || (statusType = {}));
//# sourceMappingURL=Task.js.map