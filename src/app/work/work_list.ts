import { Work } from "./work_interface";

export const work: Work[] = [
    { work: 'Hit the gym', did: false, didDate: null!, deadline: 3, priority: "Urgently" },
    { work: 'Pay bills', did: false, didDate: null!, deadline: 11, priority: "There is still time" },
    { work: 'Meet John', did: false, didDate: null!, deadline: 15, priority: "For the future" },
    { work: 'Buy eggs', did: false, didDate: null!, deadline: 7, priority: "Urgently" },
    { work: 'Read a book', did: false, didDate: null!, deadline: 3, priority: "Urgently" },
    { work: 'Organize office', did: false, didDate: null!, deadline: 1, priority: "Urgently" },
    { work: 'Eat dinner', did: false, didDate: null!, deadline: 19, priority: "For the future" },
    { work: 'Buy apples', did: false, didDate: null!, deadline: 23, priority: "For the future" },
    { work: 'Meet George', did: false, didDate: null!, deadline: 13, priority: "There is still time" },
    { work: 'Feed the cat', did: false, didDate: null!, deadline: 9, priority: "There is still time" },
    { work: 'Write a letter', did: false, didDate: null!, deadline: 4, priority: "Urgently" },
    { work: 'Run 1 km', did: false, didDate: null!, deadline: 5, priority: "Urgently" },
]


export function add(task: Work): void {
    let obj: Work = { work: task.work, did: false, didDate: null!, priority: task.priority, deadline: task.deadline };
    work.push(obj);
}
export function sort(): void {
    work.sort((a: any, b: any) => {
        if (a.deadline < b.deadline) return -1;
        else if (a.deadline > b.deadline) return 1;
        else return 0;
    });
}
export function remove(w: Work): void {
    var index = work.indexOf(w);
    if (index > -1)
        work.splice(index, 1);
}