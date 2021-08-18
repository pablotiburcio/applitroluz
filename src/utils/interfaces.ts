export interface Action {
    id: string,
    type: string,
    description: string
}

export type Step = {
    id: string,
    type: string,
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
    procedureID: number,
    image: string,
    title: string,
    steps: Step[],
    actions: Action[],
    finished: string
}
