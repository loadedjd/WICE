class Namespace {
    public name: string;
    public isSecure: boolean;
    public whiteListedUsers: User[];
    public data: object;
}

module.exports = { Namespace };
