import { Component } from '@angular/core';
import { Work, add, work } from './work';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'HW-Web_2-Angular-';
    works: Work[] = work;
    task: string = "";
    doWork(w: Work): void {
        w.do ? w.do = false : w.do = true;
    }
    PushTask(): void {
        add(this.task);
        this.task = "";
    }
}
