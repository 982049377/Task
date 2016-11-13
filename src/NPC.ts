interface Observer{
    onchange(task:Task);
}

class NPC extends egret.DisplayObjectContainer  implements Observer{4
    private _name:string;
    private _id:string;
    private _role:Role;
    private _tasklist:Task[]=[];
    private taskresponse:egret.Bitmap;


    public static NPC_LIST:{[index:string]:{name:string,Flashlist:number}} = {
        "01":{name:"甘宁",Flashlist:6},//甘宁
        "02":{name:"陆逊",Flashlist:4} //陆逊
    }


    public constructor(id:string){
        super();
        this._id=id;
        this._role=new Role(this.CreatNPC(id),this.CreatNPC(id));
        this._role.firstCreat();
        this.addChild(this._role);
        this._name=NPC.NPC_LIST[id].name
        this.taskresponse=new egret.Bitmap();   
    }
    public refreshTask(){
        var label=new egret.TextField();
        label.text=this._name;
        this.addChild(label);
        label.x=-30;
        label.y=70;
        label.$setTextColor(0X00000);
        label.size=40;  


        this.taskresponse.scaleX=0.5;
        this.taskresponse.scaleY=0.5;
        this.taskresponse.x=-50;
        this.taskresponse.y=-180;
        this.addChild(this.taskresponse);
       
        this.getTask();
        this.responseTask();
    }

    private CreatNPC(id:string):string[]{
           var Animationlist:string[]=[];
           for(var s=0;s<NPC.NPC_LIST[id].Flashlist;s++){
                if(s<10) Animationlist.push( "NPC"+id+"_0"+s+""+"_png");
                if(s>10) Animationlist.push( "NPC"+id+"_"+s+""+"_png");
           }
           return Animationlist;
    }

    private getTask(){

        var NPCRule:Function=   (tasklist):Task[]=>{
            var temptasklist:Task[]=[];
            for (var id in tasklist){
               var task:Task=tasklist[id];
               if(task.gettoNpcId()==this._id){
                   temptasklist.push(task);
               }
               if(task.getfromNpcId()==this._id){
                    temptasklist.push(task);
               }
            }
            return temptasklist;
        }
        this._tasklist=TaskService.getIntance().getTaskByCustomRule(NPCRule);
    }

    public onchange(task:Task){
        for(var s of this._tasklist){
            if(s.getid()==task.getid()){
                if(s.getfromNpcId() == this._id)
                    console.log(this._name+":发出任务");
                if(s.gettoNpcId() == this._id)
                    console.log(this._name+":完成任务");
            }
        }
        this.responseTask();
    }
    public addTask(task:Task){
        this._tasklist.push(task);
    }
//是否身上有未发出的任务
    private hasSendTask():boolean{
        for(var s of this._tasklist){
            if(s.getfromNpcId()==this._id && s.getstatus()==statusType.Acceptable){
               return true;
            }
        }
        return false;
    }
//是否身上有未接受的任务
    private hasReceiveTask():boolean{
        for(var s of this._tasklist){
            if(s.gettoNpcId()==this._id && s.getstatus()==statusType.Working){
               return true;
            }
            if(s.gettoNpcId()==this._id && s.getstatus()==statusType.Cancomplete){
               return true;
            }
        }
        return false;
    }

    public responseTask(){
        /**缺最优算法 */
        for(var s of this._tasklist){
            //任务发出不可接受，没有表情
            if(s.getstatus()==statusType.Unacceptable){
                this.taskresponse.texture=RES.getRes("0_png");
                console.log("0.png");
            }
            //任务发出可接受，蓝色问号
            if(s.getfromNpcId()==this._id && s.getstatus()==statusType.Acceptable){
                this.taskresponse.texture=RES.getRes("1_png");
                console.log("1.png");
            }
            //任务进行中，灰色问号
            if(s.gettoNpcId()==this._id && s.getstatus()==statusType.Working){
                this.taskresponse.texture=RES.getRes("2_png");
                console.log("2.png");
            }
            //任务可完成但没提交，金色问号
            if(s.gettoNpcId()==this._id && s.getstatus()==statusType.Cancomplete){
                this.taskresponse.texture=RES.getRes("3_png");
                console.log("3.png");
            }
            //任务提交完成，没有表情
            if(s.gettoNpcId()==this._id && s.getstatus()==statusType.Complete){
                this.taskresponse.texture=RES.getRes("0_png");
                console.log("0.png");
            }
        }
        if(!this.hasSendTask()&&!this.hasReceiveTask())
            this.taskresponse.texture=RES.getRes("0_png");
    }
}




class TaskPanel  implements Observer{
    private _tasklist:Task[]=[];
    public onchange(task:Task){
        for(var s of this._tasklist){
            if(s.getfromNpcId==task.getfromNpcId)
                console.log(this+"发出任务");
            if(s.gettoNpcId==task.gettoNpcId)
                console.log(this+"完成任务");
        }
    }
}