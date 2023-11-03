import { Component } from '@angular/core';
import { Work } from './work_interface';
import { add, remove, sort, work } from './work_list';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  works: Work[] = work;
  workShow: Work[] = this.works;
  searchName: string = "";
  didWork(w: Work): void {
    w.did ? w.did = false : w.did = true;
    w.did ? w.didDate = new Date() : w.didDate = null!;
  }
  AddTask(task: Work) {
    add(task);
  }
  SortByDays() {
    sort();
  }
  Change() {
    console.log("Ok");
    if (this.searchName.length != 0) {
      let size = this.searchName.length;
      this.workShow = [];

      this.works.forEach((workElement) => {
        let word = "";
        if (size <= workElement.work?.length!) {
          for (let i = 0; i < size; i++) {
            word += workElement.work![i];
          }
          if (word == this.searchName) this.workShow.push(workElement);
        }
      });
    }
    else {
      this.workShow = this.works;
    }
  }
  Remove(work: Work) {
    remove(work);
  }

}
