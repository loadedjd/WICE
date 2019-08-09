import { Injectable } from '@nestjs/common';
import { JSONPath } from 'jsonpath-plus';

@Injectable()
export class JsonService {
    public get(json: object, path: string): any {
        return JSONPath([], path, json);
    }
}
