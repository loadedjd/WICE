import { Injectable } from '@nestjs/common';
import { JSONPath } from 'jsonpath-plus';
import * as fs from 'fs';

@Injectable()
export class DataService {

    private _dataFile = './data.json';

    public get(path: string, value: any) {
        let json = fs.readFileSync(this._dataFile).toJSON();
        let result = JSONPath({path: path, json});
    }
}
