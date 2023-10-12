import { Component } from '@angular/core';
import { model, TodoItems } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new model();

  showAll = false;


  getName(){
    return this.model.user;
  }


  getTodoList(){
    if(!this.showAll){
      return this.model.items.filter(item => !item.action);
    }
    return this.model.items;
  }


  addTodoItem(todoValue:string){
    this.model.items.push(new TodoItems(todoValue,false));
  }


}
