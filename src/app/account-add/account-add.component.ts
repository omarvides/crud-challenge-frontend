import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {
  accountForm: FormGroup;
  id:string='';
  email:string='';
  isLoadingResults = false;
  currentId:string= '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      id : new FormControl({value: uuid(), disabled: true}, Validators.required),
      email : new FormControl({value: '', disabled: false}, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
      ])),
    });
    this.generateNewUuid();
  }

  generateNewUuid() {
    this.currentId = uuid();
  }

  onFormSubmit(form) {
    this.isLoadingResults = true;
    this.api.addAccount(form.getRawValue())
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/account-details', id]);
        }, (err) => {
          console.log(err);
          this.router.navigate(['/account-add']);
          this.isLoadingResults = false;
        });
  }

}
