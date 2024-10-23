export const formatMinutesToHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
};

export const buildDictionary = (people: IPerson[]): Record<string, string[]> =>
    people.reduce((acc, person: IPerson) => {
        if (!acc[person.name]) {
            acc[person.name] = [];
        }
        acc[person.name].push(person.department);
        return acc;
    }, {} as Record<string, string[]>);

export interface IPerson {
    name: string;
    department: string;
}