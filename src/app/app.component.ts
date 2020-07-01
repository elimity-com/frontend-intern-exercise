import { Component } from '@angular/core';
import { Priority } from './priority';
import { Project } from './project';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'frontend-exercise';

    public readonly projects: Project[] = [
        {
            dueDate: new Date('12-12-2022'),
            owner: 'Jim',
            priority: Priority.medium,
            title: 'Project A',
            tasks: [],
        },
        {
            dueDate: new Date('01-01-2021'),
            owner: 'Ben',
            priority: Priority.medium,
            title: 'Project B',
            tasks: [
                {
                    priority: Priority.low,
                    title: 'Task 1',
                },
                {
                    priority: Priority.high,
                    title: 'Task 2',
                },
                {
                    priority: Priority.high,
                    title: 'Task 3',
                },
            ],
        },
        {
            dueDate: new Date('1-08-2020'),
            owner: 'Jef',
            priority: Priority.high,
            title: 'Project C',
            tasks: [],
        },
        {
            dueDate: new Date('11-05-2022'),
            owner: 'Max',
            priority: Priority.low,
            title: 'Project D',
            tasks: [
                {
                    priority: Priority.low,
                    title: 'Task 4',
                },
                {
                    priority: Priority.high,
                    title: 'Task 5',
                },
                {
                    priority: Priority.high,
                    title: 'Task 6',
                },
            ],
        },
        {
            dueDate: new Date('11-02-2022'),
            owner: 'Tim',
            priority: Priority.low,
            title: 'Project E',
            tasks: [
                {
                    priority: Priority.low,
                    title: 'Task 7',
                },
                {
                    priority: Priority.high,
                    title: 'Task 8',
                },
            ],
        },
        {
            dueDate: new Date('09-09-2020'),
            owner: 'Ron',
            priority: Priority.medium,
            title: 'Project F',
            tasks: [
                {
                    priority: Priority.low,
                    title: 'Task 9',
                },
                {
                    priority: Priority.high,
                    title: 'Task 10',
                },
            ],
        },
        {
            dueDate: new Date('5-10-2020'),
            owner: 'Sam',
            priority: Priority.high,
            title: 'Project G',
            tasks: [],
        },
    ];

    private showTasks = this.projects.map((_) => false);
}
