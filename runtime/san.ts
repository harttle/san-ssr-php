class Data {
    public get (path: string): any {
        return path
    }
}

export class Component {
    public data: Data;
}

export class SanSSRFiltersDeclarations {
    [key: string]: (...args: any[]) => any
}

export class SanSSRComputedDeclarations {
    [key: string]: (sanssrSelf: Component) => any
}