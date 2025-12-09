export interface Productos {
    id: number;
    title: string;
    type: string;
    description: string;
    filePath: string;
    slug: string;
    mainModify: string;
    allModify: allModify[];
    largeDescription: string;
}

export interface allModify {
    name: string;
    img: string;
    char: string;
}
