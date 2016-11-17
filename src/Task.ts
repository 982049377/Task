class Task implements TaskConditionContext {
    private _id: string;
    private _name: string;
    private _dris: string;
    private _status: statusType;
    private _current: number = 0;
    private _total: number = -1;
    private _fromNpcId: string;
    private _toNpcId: string;
    private _condition: TaskCondition;

    constructor(id: string, name: string, dris: string, fromNpcId: string, toNpcId: string,total:number,condition:TaskCondition) {
        this._id = id;
        this._name = name;
        this._dris = dris;
        this._fromNpcId = fromNpcId;
        this._toNpcId = toNpcId;
        this._status = statusType.Acceptable;
        this._total = total;
        this._current = 0;
        this._condition=condition;
    }
    public getdris(): string {
        return this._dris;
    }
    public getid(): string {
        return this._id;
    }
    public getname(): string {
        return this._name;
    }
    public getfromNpcId(): string {
        return this._fromNpcId;
    }
    public gettoNpcId(): string {
        return this._toNpcId;
    }
    public getstatus(): statusType {
        return this._status;
    }
    public finish() {
        // console.log(this._status);
        this._status = statusType.Complete;
        // console.log(this._status);
     //   this._condition.onsubmit(this);
    }

    public accept() {
        // console.log(this._status);
        // this._status = statusType.Acceptable;
        // console.log(this._status);
        this._condition.onAccept(this);
    }
    public Canaccept() {
        // console.log(this._status);
        this._status = statusType.Acceptable;
        // console.log(this._status);
    }
    public Canfinish() {
        // console.log(this._status);
        this._status = statusType.Cancomplete;
        // console.log(this._status);
    }
    public getcurrent(): number {
        return this._current;
    }
    public setcurrent() {
        this._current ++;
        this.CheckStatus();

    }
    private em:EventEmitter;
    public CheckStatus() {
        if(this._status==statusType.Acceptable)
            this._status=statusType.Working;
        if(this._status==statusType.Working){
            if (this._current >= this._total) {
                console.error(this._name + "的this._current>this._total");
                this._status = statusType.Cancomplete;
            }
            this.em=TaskService.getIntance();
            this.em.notify(this._id);
        }
    }
}

interface TaskConditionContext {
    getcurrent(): number;
    setcurrent(): void;
}

interface TaskCondition {
    onAccept(task: TaskConditionContext);

    //onsubmit(task: TaskConditionContext);
}


class NPCTalkTaskCondition implements TaskCondition {

    onAccept(task: TaskConditionContext) {
        task.setcurrent();
        console.log(task.getcurrent());
    }

    // onsubmit(task: TaskConditionContext) {
       
    // }
}
class KillMonsterTaskCondition implements TaskCondition,Observer{

    onAccept(task: TaskConditionContext) {
      
    }

    // onsubmit(task: TaskConditionContext) {
        
    // }
    onchange(task:TaskConditionContext){
        task.setcurrent();
    }
}
enum statusType {
    Unacceptable,
    Acceptable,
    Working,
    Cancomplete,
    Complete
}