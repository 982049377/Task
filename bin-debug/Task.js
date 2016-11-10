var Task = (function () {
    function Task(id, name, sender, receiver) {
        this._id = id;
        this._name = name;
        this._sender = sender;
        this._receiver = receiver;
    }
    var d = __define,c=Task,p=c.prototype;
    p.getid = function () {
        return this._id;
    };
    p.getname = function () {
        return this._name;
    };
    p.getsender = function () {
        return this._sender;
    };
    p.getreceiver = function () {
        return this._receiver;
    };
    p.finish = function () {
        //var ts = new TaskService();
        //TaskService.instance;
        console.log(this._status);
        this._status = statusType.Complete;
        console.log(this._status);
    };
    return Task;
}());
egret.registerClass(Task,'Task');
var statusType;
(function (statusType) {
    statusType[statusType["Unacceptable"] = 0] = "Unacceptable";
    statusType[statusType["Acceptable"] = 1] = "Acceptable";
    statusType[statusType["Working"] = 2] = "Working";
    statusType[statusType["Cancomplete"] = 3] = "Cancomplete";
    statusType[statusType["Complete"] = 4] = "Complete";
})(statusType || (statusType = {}));
//# sourceMappingURL=Task.js.map