import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    constructor() { }
}

export class Lesson {    
    constructor(
        public module: string, 
        public lesson: string) {        
    }

    done: boolean;
}