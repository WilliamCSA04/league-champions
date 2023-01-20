
export function parseToArray<T>(obj: T) {
    return Object.values(obj) as unknown as typeof obj[keyof typeof obj][]
}