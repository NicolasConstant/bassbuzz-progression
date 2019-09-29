import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    constructor() { }

    getLessons(): Lesson[] {
        return this.generateNewSetLessons();
    }

    validateLesson(id: string) {

    }

    private generateNewSetLessons(): Lesson[] {
        let lessons: Lesson[] = [];

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(1, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(2, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(3, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(4, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(5, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(6, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(7, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(8, i));
        }

        for (let i = 1; i < 8; i++) {
            lessons.push(new Lesson(9, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(10, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(11, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(12, i));
        }

        for (let i = 1; i < 7; i++) {
            lessons.push(new Lesson(13, i));
        }

        for (let i = 1; i < 5; i++) {
            lessons.push(new Lesson(14, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(15, i));
        }

        for (let i = 1; i < 6; i++) {
            lessons.push(new Lesson(16, i));
        }

        return lessons;
    }   
}

export class Lesson {
    constructor(
        public module: number,
        public lesson: number) {
        this.id = `M${module}-L${lesson}`;
    }

    id: string;
    done: boolean;
}