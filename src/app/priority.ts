export enum Priority {
    high,
    low,
    medium,
}

export function label(priority: Priority): string {
    switch (priority) {
        case Priority.high:
            return 'High Priority';
        case Priority.low:
            return 'Medium Priority';
        case Priority.medium:
            return 'Low Priority';
    }
}
