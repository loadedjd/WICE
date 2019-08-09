import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { JsonService } from '../Data/json.service';

describe('JsonService', () => {
    let appController: AppController;
    let jsonService: JsonService;
    let testObject: object;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService, JsonService],
        }).compile();

        appController = app.get<AppController>(AppController);
        jsonService = app.get<JsonService>(JsonService);
        testObject = {
            "Admin": {
                "isSecure": true,
                "whiteListedUsers": [
                    "jared"
                ],
                "data": {
                    "location": [
                        40,
                        39
                    ],
                    "lastHome": 1000
                }
            },
            "Common": {
                "isSecure": true,
                "whiteListedUsers": [
                    "jared"
                ],
                "data": {
                    "location": [
                        40,
                        39
                    ],
                    "lastHome": 1000
                }
            }
        };
    });

    describe('JSON Service', () => {
        it('Should read correct json from path', () => {
            const actual = jsonService.get(testObject, 'Admin.isSecure');
            const expected = [true];

            expect(actual).toEqual(expected);
        });

        it ('Should modify json according to path', () => {
            const modified = jsonService.modify(testObject, 'Admin.isSecure', false);

            expect([false]).toEqual(modified);
        });
    });
});
