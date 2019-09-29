import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../../services/schedule.service';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
    @Input() lesson: Lesson;

    isChecked: boolean;

    constructor() { }

    ngOnInit() {
        this.isChecked = this.lesson.done;
    }

    lessonChanged(): boolean {
        console.warn(this.isChecked);
        return false;
    }

}
