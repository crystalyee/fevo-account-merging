/* 
Since the downloaded JSON contains applications that are numbers instead of strings, 
I am assuming that malformed data should be converted to a string.
Normally I would clarify this with business end users / other team members.
*/

export interface IAccountInput {
    application: any;
    emails : any[];
    name: any;
}

export class Account implements IAccountInput {
    application: string;
    emails : string[];
    name: string;

    constructor(o?: IAccountInput) {
        this.application = (o && o.application !== null && o.application !== undefined) ? String(o.application).toString() : "";
        this.emails = (o && o.emails) ? convertListToString(o.emails) : [];
        this.name = (o && o.name !== null && o.name !== undefined) ? String(o.name).toString() : "";
    }
}

function convertListToString(array : any[]) : string[] {
    array = array.filter(x => x !== undefined && x !== null);
    return array.map(x => new String(x).toString());
}