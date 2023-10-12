export class model
{

  user;
  items;

  constructor(){
    this.user = "Hasan";
    this.items = [
      new TodoItem("Clean the house",true),
      new TodoItem("Wash the dishes",false),
      new TodoItem("Feed the cat",false),
      new TodoItem("Buy groceries",false),
      new TodoItem("Mow the lawn",false),

    ];
  }

  getName(){
    return this.user;
  }

}


export class TodoItem
{
  description;
  action;

  constructor(description:string,action:boolean){
    this.description = description;
    this.action = action;
  }
}

