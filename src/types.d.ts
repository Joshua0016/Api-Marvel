interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: Image;
}

interface Url {
    type: string;
    url: string;
}

interface Image {
    path: string;
    extension: string;
}