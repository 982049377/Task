var Task = (function () {
    function Task(id, name, sender, receiver) {
        this._id = id;
        this._name = name;
        this._sender = sender;
        this._receiver = receiver;
        this._status = statusType.Unacceptable;
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
    p.getstatus = function () {
        return this._status;
    };
    p.finish = function () {
        console.log(this._status);
        this._status = statusType.Complete;
        console.log(this._status);
    };
    p.accept = function () {
        console.log(this._status);
        this._status = statusType.Acceptable;
        console.log(this._status);
    };
    p.during = function () {
        console.log(this._status);
        this._status = statusType.Working;
        console.log(this._status);
    };
    p.Canfinish = function () {
        console.log(this._status);
        this._status = statusType.Cancomplete;
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