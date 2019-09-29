import { Component, OnInit } from '@angular/core';

import { BassBuzzScheduleEnum, ScheduleService } from './services/schedule.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {    
    scheduleType: BassBuzzScheduleEnum;

    constructor(private readonly scheduleService: ScheduleService) {                
    }

    ngOnInit(): void {
        this.scheduleType = this.scheduleService.getScheduleType();
    }

    selectSchedule(value: BassBuzzScheduleEnum): boolean {
        this.scheduleService.saveScheduleType(value);
        this.scheduleType = value;        
        return false;
    }
}

