import { Component } from "@angular/core";
import todos from "./todos.json";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-root",
  styleUrls: ["./root.component.css"],
  templateUrl: "./root.component.html",
})
export class RootComponent {
  public constructor(private readonly dialog: MatDialog) {}

  public onClickAddTodo(): void {
    this.dialog.open(DialogComponent).afterClosed().subscribe(this.addTodo);
  }

  public onClickDelete(index: number): void {
    this.todos.splice(index, 1);
  }

  public readonly todos = todos;

  public get showTodos(): boolean {
    return this.todos.length > 0;
  }

  private readonly addTodo = (todo: Todo | undefined): void => {
    if (todo != undefined) this.todos.push(todo);
  };
}
