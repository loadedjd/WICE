import { Injectable } from 'node_modules/@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class DataService {
    public read(namespace: string, path: string): Promise<any> {
        const promise = new Promise<any>((resolve, reject) => {
            const json = fs.readFileSync('../Files/namespaces.conf.json').toJSON();

            if (json !== undefined) {
                resolve(json);
            } else {
                reject('Error reading');
            }
        });

        return promise;
    }
    public write() { 
        
    }
}
