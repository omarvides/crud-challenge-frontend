import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  accountForm: FormGroup;
  id:string='';
  email:string='';
  isLoadingResults = false;
  currentId:string= '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAccount(this.route.snapshot.params['id']);
    this.accountForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'email' : [null, Validators.required]
    });
  }

  getAccount(id) {
    this.api.getAccount(id).subscribe(data => {
      this.id = data[0]._id;
      this.accountForm.setValue({
        id: data[0]._id,
        email: data[0].email,
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateAccount(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/account-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  productDetails() {
    this.router.navigate(['/account-details', this.id]);
  }

}
