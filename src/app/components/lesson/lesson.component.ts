import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
    @Input() id: string;
    checked: boolean;

    constructor() { }

    ngOnInit() {
    }

}
