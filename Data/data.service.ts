import { Injectable } from 'node_modules/@nestjs/common';
import { JsonService } from './json.service';
import * as jsonfile from 'jsonfile';
import { JSONPath } from 'jsonpath-plus';

@Injectable()
export class DataService {

    private namespacesDataFile = '../Files/namespaces.conf.json';

    constructor(private _jsonService: JsonService) {  }

    public async read(namespace: string, path: string): Promise<any> {
            const json = await jsonfile.readFile(this.namespacesDataFile);
            const namespaces = json['namespaces'] as Namespace[];
            const matchingNamespaces = namespaces.filter(n => n.name === namespace);

            if (matchingNamespaces.length > 0) {
                const namespaceData = matchingNamespaces[0].data;
                const filterdData = this._jsonService.get(namespaceData, path);
                return filterdData;
            } else {
                throw new NoMatchingNamespacesError();
            }
    }
    public write(namespace: string, path: string, value: object) {

    }
}
