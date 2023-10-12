export class model
{

  user;
  items;

  constructor(){
    this.user = "Hasan";
    this.items = [
      new TodoItems("Clean the house",true),
      new TodoItems("Wash the dishes",false),
      new TodoItems("Feed the cat",false),
      new TodoItems("Buy groceries",false),
      new TodoItems("Mow the lawn",false),

    ];
  }

  getName(){
    return this.user;
  }

}


export class TodoItems
{
  description;
  action;

  constructor(description:string,action:boolean){
    this.description = description;
    this.action = action;
  }
}

