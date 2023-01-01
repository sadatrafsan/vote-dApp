import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  taskForm!: FormGroup;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      task: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }


  get task() {
    return this.taskForm.get('task');
  }

  onSubmit(){

    this.contractService.sendData(this.task?.value).then((result) => {

      console.log(result);

      this.contractService.getData().then((result) => {
        console.log(result);
      });
    });


  }
}
