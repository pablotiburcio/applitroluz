export interface Action {
    id: string,
    type: "action" | "end",
    description: string
}

export interface Step {
    id: string,
    type: "start" | "test",
    description: string,
    question: string,
    work: {
        label: string,
        jump: string
    },
    failure: {
        label: string,
        jump: string
    }
}
export interface Procedure {
    steps: Step[],
    action: Action[]
}