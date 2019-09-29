import { Injectable } from '@angular/core';
import { setFirstTemplatePass } from '@angular/core/src/render3/state';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    private lessonsStorageName: string = 'lessons';

    constructor() { }

    getLessons(): Lesson[] {
        const savedLessons = this.getSavedLessons();
        if(savedLessons.length === 0) {
            const generatedLessons = this.generateNewSetLessons();
            this.saveLessons(generatedLessons);
        }

        return this.getSavedLessons();
    }

    changeLessonStatus(id: string, isDone: boolean) {
        const lessons = this.getSavedLessons();
        const lesson = lessons.find(x => x.id === id);
        lesson.done = isDone;
        this.saveLessons(lessons);
    }

    private getSavedLessons(): Lesson[] {
        const json = localStorage.getItem(this.lessonsStorageName);
        if (json) {
            return JSON.parse(json);
        } else {
            return [];
        }
    }

    private saveLessons(lessons: Lesson[]) {
        const json = JSON.stringify(lessons);
        localStorage.setItem(this.lessonsStorageName, json);
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
    done: boolean = false;
}