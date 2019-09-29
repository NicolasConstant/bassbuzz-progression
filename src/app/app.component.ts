import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'BassBuzz.com Progression';
    scheduleType: BassBuzzScheduleEnum = BassBuzzScheduleEnum.Unknown;

    constructor() {
                
    }

    selectSchedule(value: BassBuzzScheduleEnum): boolean {
        this.scheduleType = value;
        return false;
    }
}

export enum BassBuzzScheduleEnum {
    Unknown = 0,
    OneMonth = 1,
    ThreeMonth = 2,
    SixMonth = 3
}