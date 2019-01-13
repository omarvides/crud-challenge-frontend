import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Account } from '../account';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email'];
  data: Account[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
  this.api.getAccounts()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
}

}
