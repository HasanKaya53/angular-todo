import { Component } from '@angular/core';
import { model, TodoItems } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new model();



  getName(){
    return this.model.user;
  }


  getTodoList(){
    return this.model.items.filter(item => !item.action);
  }


  addTodoItem(todoValue:string){
    this.model.items.push(new TodoItems(todoValue,false));
  }


}
