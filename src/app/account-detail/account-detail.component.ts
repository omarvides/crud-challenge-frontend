import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  account: Account = { id: '', email: ''};
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  getAccountDetails(id) {
    this.api.getAccount(id)
      .subscribe(data => {
        this.account = data[0];
        this.isLoadingResults = false;
      });
  }
  
  deleteAccount(id) {
    this.isLoadingResults = true;
    this.api.deleteAccount(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/account']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  
  ngOnInit() {
    this.getAccountDetails(this.route.snapshot.params['id']);
  }

}
