export const work: Work[] = [
    { work: 'Hit the gym', do: false },
    { work: 'Pay bills', do: false },
    { work: 'Meet John', do: false },
    { work: 'Buy eggs', do: false },
    { work: 'Read a book', do: false },
    { work: 'Organize office', do: false },
    { work: 'Eat dinner', do: false },
    { work: 'Buy apples', do: false },
    { work: 'Meet George', do: false },
    { work: 'Feed the cat', do: false },
    { work: 'Write a letter', do: false },
    { work: 'Run 1 km', do: false },
]

export interface Work {
    work: string,
    do: boolean
}
export function add(task: string): void {
    let obj: Work = { work: task, do: false };
    work.push(obj);
}