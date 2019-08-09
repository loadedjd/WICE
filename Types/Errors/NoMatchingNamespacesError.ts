class NoMatchingNamespacesError implements Error {
    public name: string;
    public message: string;
    public stack?: string;

    constructor(message: string = 'No Matching namespaces were found') {
        this.message = message;
    }
}
