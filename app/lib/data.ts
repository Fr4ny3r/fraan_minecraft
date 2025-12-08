export interface Productos {
    id: number;
    title: string;
    type: string;
    description: string;
    filePath: string;
    slug: string;
    mainModify: string;
    allModify: {
        name: string;
        image: string;
        char: string;
    }[];
    largeDescription: string;
}
