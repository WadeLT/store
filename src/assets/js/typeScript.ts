export const fun1= function(a:number,b:number){
    console.log(a+b)
} 
export class Person{
    name:string;
    constructor(name1:string){//构造函数，实例化类的时候触发的方法
    this.name=name1
    }

    run():void{
        console.log(this.name)
    }
}
// const per=new Person('张三')
// export default {fun1,Person}