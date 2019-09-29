import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BassBuzzScheduleEnum, ScheduleService } from './services/schedule.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    scheduleType: BassBuzzScheduleEnum;
    private scheduleSub: Subscription;

    constructor(private readonly scheduleService: ScheduleService) {
    }

    ngOnInit(): void {
        this.scheduleSub = this.scheduleService.scheduleTypeSub.subscribe((type: BassBuzzScheduleEnum) => {
            this.scheduleType = type;
        });
    }

    ngOnDestroy(): void {
        this.scheduleSub.unsubscribe();
    }

    selectSchedule(value: BassBuzzScheduleEnum): boolean {
        this.scheduleService.changeScheduleType(value);
        return false;
    }
}

