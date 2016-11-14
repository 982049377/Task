class Task{
    private _id:string;
    private _name:string;
    private _dris:string;
    private _status:statusType;
    private _fromNpcId:string;
    private _toNpcId:string;

    constructor(id:string,name:string,dris:string,fromNpcId:string,toNpcId:string){
        this._id=id;
        this._name=name;
        this._dris=dris;
        this._fromNpcId=fromNpcId;
        this._toNpcId=toNpcId;
        this._status=statusType.Unacceptable;
    }
    public getdris():string{
        return this._dris;   
    }
    public getid():string{
        return this._id;
    }
    public getname():string{
        return this._name;
    }
    public getfromNpcId():string{
        return this._fromNpcId;
    }
    public gettoNpcId():string{
        return this._toNpcId;
    }
    public getstatus():statusType{
        return this._status;
    }
    public finish(){
        console.log(this._status);
        this._status=statusType.Complete;
        console.log(this._status);
    }

     public accept(){
        console.log(this._status);
        this._status=statusType.Acceptable;
        console.log(this._status);
    }
     public during(){
        console.log(this._status);
        this._status=statusType.Working;
        console.log(this._status);
    }
    public Canfinish(){
        console.log(this._status);
        this._status=statusType.Cancomplete;
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