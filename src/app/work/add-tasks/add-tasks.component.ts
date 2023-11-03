import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Work } from '../work_interface';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent {
  taskGroup = this.formBuilder.group({
    work: ['', Validators.minLength(1)],
    deadline: ['', Validators.min(0)],
    priority: ['']
  })
  constructor(private formBuilder: FormBuilder) { }

  @Output()
  getTask = new EventEmitter<Work>();


  addTask(): void {
    //console.log(this.taskGroup.value as Work);
    this.getTask.emit(this.taskGroup.value as Work)
  }
}
