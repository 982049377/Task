class TaskPanel extends egret.DisplayObjectContainer implements Observer {
    private _tasklist:Task[];
    private _textfield:egret.TextField;
    private _returnButton:egret.Bitmap;
    private _background:egret.Bitmap;
    private _container:egret.DisplayObjectContainer;
    public constructor(){
        super();
        this._tasklist=[];
        this._textfield=new egret.TextField();
        this._returnButton=new egret.Bitmap();
        this._background=new egret.Bitmap();
        this._container=new egret.DisplayObjectContainer();
    }
    public onchange(task:Task){
        for(var s of this._tasklist){
            if(s.getfromNpcId==task.getfromNpcId)
                console.log(this+"发出任务");
            if(s.gettoNpcId==task.gettoNpcId)
                console.log(this+"完成任务");
        }
    }
    private getTask(){
        var NPCRule:Function=   (tasklist):Task[]=>{
            var temptasklist:Task[]=[];
            for (var id in tasklist){
               var task:Task=tasklist[id];
               if(task.getstatus()==statusType.Working){
                   temptasklist.push(task);
               }
               if(task.getstatus()==statusType.Cancomplete){
                    temptasklist.push(task);
               }
            }
            return temptasklist;
        }
        this._tasklist=TaskService.getIntance().getTaskByCustomRule(NPCRule);
    }

}