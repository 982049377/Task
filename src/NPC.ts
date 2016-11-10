interface Observer{
    onchange(task:Task);
}

class NPC  implements Observer{
    private _name;
    private _tasklist:Task[]=[];
    public constructor(name:string){
        this._name=name;
    }
    public onchange(task:Task){
        for(var s of this._tasklist){
            if(s.getid()==task.getid()){
                if(s.getsender() == this._name)
                    console.log(this._name+":发出任务");
                if(s.getreceiver() == this._name)
                    console.log(this._name+":完成任务");
            }
        }
    }
    public addTask(task:Task){
        this._tasklist.push(task);
    }

}

class TaskPanel  implements Observer{
    private _tasklist:Task[]=[];
    public onchange(task:Task){
        for(var s of this._tasklist){
            if(s.getsender==task.getsender)
                console.log(this+"发出任务");
            if(s.getreceiver==task.getreceiver)
                console.log(this+"完成任务");
        }
    }
}