import { Component } from "@angular/core";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
})
export class DialogComponent {
  public confirmDisabled(element: HTMLFormElement): boolean {
    return !element.checkValidity();
  }

  public makeTodo(
    labelElement: HTMLInputElement,
    timestampElement: HTMLInputElement,
  ): Todo {
    return {
      label: labelElement.value,
      timestamp: timestampElement.value,
    };
  }
}
