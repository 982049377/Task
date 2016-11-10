interface Observer{
    onchange(task:Task);
}

class NPC extends egret.DisplayObjectContainer  implements Observer{
    private _name:string;
    private _role:Role;
    private _tasklist:Task[]=[];
    public constructor(name:string){
        super();
        this._name=name;
        this._role=new Role();
        this._role.firstCreat();
        this.addChild(this._role);

        var label=new egret.TextField();
        label.text=this._name;
        this.addChild(label);
        label.x=-30;
        label.y=70;
        label.$setTextColor(0X00000);
        label.size=40;
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