import { Priority } from './priority';

export interface Project {
    readonly dueDate: Date;
    readonly owner: string;
    readonly priority: Priority;
    readonly tasks: Task[];
    readonly title: string;
}

export interface Task {
    readonly priority: Priority;
    readonly title: string;
}
