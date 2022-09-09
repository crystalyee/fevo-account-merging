import { Account } from "./types/Account";
import { Person } from "./types/Person";

import accountsJson from "./accounts.json";

function mergeAccounts(accounts: Account[]) {
    let emailRecord : Record<string, Set<string>> = getEmailRecord(accounts);
    let emailGroups : Set<Set<string>> = getEmailGroups(emailRecord);

    let people : Person[] = [];
    emailGroups.forEach((emailSet) => {
        let name : String = "";
        let applications : Set<string> = new Set<string>();
        accounts.forEach((account) => {
            if (account.emails.some(e => emailSet.has(e))) {
                if (account.name.length > name.length) {
                    name = account.name;
                }
                applications.add(account.application);
            }
        });
        people.push(new Person({
            applications: Array.from(applications.values()),
            emails: Array.from(emailSet.values()),
            name: name
        }));
    });

    people = people.filter(p => p.name !== "" && p.emails.length > 0 && p.applications.length > 0);
    console.log(people);
}

function getEmailRecord(accounts: Account[]) {
    let emailRecord : Record<string, Set<string>> = {};

    for (let a = 0; a < accounts.length; a++) {
        const account = accounts[a];

        let set : Set<string> = new Set<string>();
        if (account.emails.some(e => e in emailRecord)) {
            set = emailRecord[account.emails[0]];
        }
        account.emails.forEach((email : string) => {
            set.add(email);
        });
        set.forEach(function(email) {
            emailRecord[email] = set;
        });
    }
    return emailRecord;
}

function getEmailGroups (emailRecord: Record<string, Set<string>>) : Set<Set<string>> {
    let emailGroups : Set<Set<string>> = new Set<Set<string>>();
    for (const [key, value] of Object.entries(emailRecord)) {
        emailGroups.add(value);
    }
    return emailGroups;
}

let accounts : Account[] = accountsJson.map(o => new Account(o));
mergeAccounts(accounts);
