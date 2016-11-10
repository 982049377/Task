interface Observer{
    onchange(task:Task);
}

class NPC extends egret.DisplayObjectContainer  implements Observer{
    private _name:string;
    private _role:Role;
    private _tasklist:Task[]=[];
    private taskresponse:egret.Bitmap;
    public constructor(name:string,idle:string[],walk:string[]){
        super();
        this._name=name;
        this._role=new Role(idle,walk);
        this._role.firstCreat();
        this.addChild(this._role);

        var label=new egret.TextField();
        label.text=this._name;
        this.addChild(label);
        label.x=-30;
        label.y=70;
        label.$setTextColor(0X00000);
        label.size=40;

        this.taskresponse=new egret.Bitmap();
        this.taskresponse.scaleX=0.5;
        this.taskresponse.scaleY=0.5;
        this.taskresponse.x=-50;
        this.taskresponse.y=-180;
        this.addChild(this.taskresponse);
    }
    public onchange(task:Task){
        for(var s of this._tasklist){
            if(s.getid()==task.getid()){
                if(s.getsender() == this._name)
                    console.log(this._name+":发出任务");
                if(s.getreceiver() == this._name)
                    console.log(this._name+":完成任务");
                this.responseTask();
            }
        }
    }
    public addTask(task:Task){
        this._tasklist.push(task);
    }

    public responseTask(){
        /**缺最优算法 */
        for(var s of this._tasklist){
            if(s.getstatus()==statusType.Unacceptable){
                this.taskresponse.texture=RES.getRes("0_png");
            }
            if(s.getsender()==this._name && s.getstatus()==statusType.Acceptable){
                this.taskresponse.texture=RES.getRes("1_png");
            }
            if(s.getreceiver()==this._name && s.getstatus()==statusType.Working){
                this.taskresponse.texture=RES.getRes("2_png");
            }
            if(s.getreceiver()==this._name && s.getstatus()==statusType.Cancomplete){
                this.taskresponse.texture=RES.getRes("3_png");
            }
            if(s.getreceiver()==this._name && s.getstatus()==statusType.Complete){
                this.taskresponse.texture=RES.getRes("4_png");
            }
        }
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