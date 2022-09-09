export interface IPerson {
    applications: string[];
    emails : string[];
    name: String;
}

export class Person implements IPerson {
    applications: string[];
    emails : string[];
    name: String;

    constructor(o?: IPerson) {
        this.applications = (o && o.applications) ?? [];
        this.emails = (o && o.emails) ?? [];
        this.name = (o && o.name) ?? "";
    }
}
