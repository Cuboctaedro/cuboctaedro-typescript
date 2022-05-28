export type IProject = {
    title: string;
    description: string;
    year: number;
    website?: string;
    tags: string[];
    content: string;
    images: {
        path: string;
        caption: string;
    }[];
};
