class Task{
    private _id:string;
    private _name:string;
    private _dris:string;
    private _status:statusType;
    private _sender:string;
    private _receiver:string;

    constructor(id:string,name:string,sender:string,receiver:string){
        this._id=id;
        this._name=name;
        this._sender=sender;
        this._receiver=receiver;
        this._status=statusType.Unacceptable;
    }

    public getid():string{
        return this._id;
    }
    public getname():string{
        return this._name;
    }
    public getsender():string{
        return this._sender;
    }
    public getreceiver():string{
        return this._receiver;
    }
    public getstatus():statusType{
        return this._status;
    }
    public finish(){
        //var ts = new TaskService();
        //TaskService.instance;
        console.log(this._status);
        this._status=statusType.Complete;
        console.log(this._status);
    }

     public accept(){
        //var ts = new TaskService();
        //TaskService.instance;
        console.log(this._status);
        this._status=statusType.Acceptable;
        console.log(this._status);
    }
     public during(){
        //var ts = new TaskService();
        //TaskService.instance;
        console.log(this._status);
        this._status=statusType.Working;
        console.log(this._status);
    }
    
}

enum statusType{
    Unacceptable,
    Acceptable,
    Working,
    Cancomplete,
    Complete
}