import { Component } from '@angular/core';
import { Work } from './work_interface';
import { add, work } from './work_list';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  works: Work[] = work;
  task: string = "";
  didWork(w: Work): void {
    w.did ? w.did = false : w.did = true;
    w.did ? w.didDate = new Date() : w.didDate = null!;
  }
  PushTask(): void {
    add(this.task);
    this.task = "";
  }
}
