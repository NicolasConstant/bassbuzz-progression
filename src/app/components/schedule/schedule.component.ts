import { Component, OnInit, Input } from '@angular/core';
import { BassBuzzScheduleEnum } from 'src/app/app.component';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    @Input() scheduleType: BassBuzzScheduleEnum;

    constructor() { }

    ngOnInit() {
    }

}
