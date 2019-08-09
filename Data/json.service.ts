import { Injectable } from '@nestjs/common';
import { JSONPath } from 'jsonpath-plus';

@Injectable()
export class JsonService {
    public get(json: object, path: string): any {
        return JSONPath([], path, json);
    }

    public modify(json: object, path: string, newValue: any): any {
        return JSONPath.apply(json, path, value => value = newValue);
    }
}
