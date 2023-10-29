import { Work } from "./work_interface";

export const work: Work[] = [
    { work: 'Hit the gym', did: false, didDate: null! },
    { work: 'Pay bills', did: false, didDate: null! },
    { work: 'Meet John', did: false, didDate: null! },
    { work: 'Buy eggs', did: false, didDate: null! },
    { work: 'Read a book', did: false, didDate: null! },
    { work: 'Organize office', did: false, didDate: null! },
    { work: 'Eat dinner', did: false, didDate: null! },
    { work: 'Buy apples', did: false, didDate: null! },
    { work: 'Meet George', did: false, didDate: null! },
    { work: 'Feed the cat', did: false, didDate: null! },
    { work: 'Write a letter', did: false, didDate: null! },
    { work: 'Run 1 km', did: false, didDate: null! },
]


export function add(task: string): void {
    let obj: Work = { work: task, did: false, didDate: null! };
    work.push(obj);
}