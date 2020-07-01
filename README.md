# Elimity Frontend Internship Exercise

## Welcome

Hi, and thanks for applying for the __Elimity Frontend Developer Intern__ position with the Elimity Engineering team.

This exercise is designed to give you an opportunity to show off programming skills that would be relevant to work on [Elimity](https://www.elimity.com/) and to give you an idea what type of work you would be doing during your internship.

## Exercise instructions
Please use this repository to develop a simple application that allows users to view a list of projects. You can find the code to start from in `src/app`. Implement your solution by extending this starter code. The starter code contains a basic app structure and a predefined list of projects you can use to display in your final solution.

### Prerequisites
Install Angular by following these instructions: https://angular.io/guide/setup-local. You do not need to create a new Angular app since we already provided this for you in this repository.

After you have installed Angular you can run the starter code from inside the repository folder:
1. Install the dependencies: run `npm install`.
2. Start the application by running `ng serve`.

### Exercise requirements
#### End result
![image](https://user-images.githubusercontent.com/3659344/86251016-9e708080-bbb1-11ea-8131-4c67a3f6e1da.png)

#### 1. Create a project component
- Create a new component that displays project info in a card. You can use [`mat-card`](https://material.angular.io/components/select/overview) for this from the angular material library.
- This component also shows a button to show or hide a list of the project tasks.
- If the project has no tasks, an apropriate message is shown: `No tasks`.
- This component should have two input parameters: 
  1. `project` of type `Project`: the project to be displayed in the card.
  2. `showTasks` of type `boolean`: whether or not the project tasks should be shown.
- This component should have one output parameter:
  1. `showTasksChange` which emits a `boolean`. Each time the HIDE TASKS button is clicked, `showTasksChange` emits `false`. Each time the SHOW TASKS button is clicked, `showTasksChange` emits `true`.
- This component shows the four properties of a project: owner, priority, due date and the number of tasks.
- This component also shows a list of the project tasks if `showTasks` is `true` and hide the tasks if it is `false`.
- See the screenshot above for how this component should look like (as an example, you can use your own layout if you prefer this).

#### 2. Use the project component to display the list of projects
Use the component created in the first step to display all projects.

#### 3. Add a dropdown menu to show/hide all tasks for all projects
- Add a dropdown menu above the list of projects showing following options: `Show all`, `Hide all` and `Separate`. You can use [`mat-select`](https://material.angular.io/components/select/overview) for this from the angular material library.
- When `Show all`  is selected, all tasks of all projects should be displayed.
- When `Hide all` is selected, all tasks of all projects should be hidden.
- When `Separate` is selected no action is needed. This option should be automatically set when one of the project cards show/hide tasks button is clicked.

### Useful resources:
- [Tour of heroes tutorial (Create a feature component)](https://angular.io/tutorial/toh-pt3): explains how to create a component in angular.
- [Introduction to angular concepts](https://angular.io/guide/architecture): learn about the design concepts and architecture of Angular apps.
- [Angular docs](https://angular.io/docs): general docs where you can find everything.
- [Angular material components](https://material.angular.io/components/categories): the library we use for our basic building blocks. It provides reusable material design components for angular.
- [`mat-select`](https://material.angular.io/components/select/overview): you can use this in your solution for the project cards.
- [`mat-card`](https://material.angular.io/components/card/overview): you use this in your solution for the drop down menu.

## Evaluation

Your submission will be evaluated against the following criteria:

* Meets the stated requirements
* Code is high quality and well organized
* Best practices are followed including:
  * Version control
  * Iterative development
  * ...

## Submission

To submit your work, email us the link to your repository containing your implementation.
