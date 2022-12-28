import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  taskForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.taskForm = new FormGroup({
      task: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get task() {

    return this.taskForm.get('task');
  }

  onSubmit(){
    console.log(this.task?.value);

  }
}
