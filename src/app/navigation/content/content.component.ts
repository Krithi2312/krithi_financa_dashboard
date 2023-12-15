import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  isLoading: boolean = true;
  balance: any;
  statistics: any;
  transactions: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    // this.httpClient.get<any>('https://1.api.fy23ey06.careers.ifelsecloud.com/')
    //   .subscribe((data) => {
    //     this.balance = data.balance;
    //     this.statistics = data.money_statistics;
    //     this.transactions = data.transactions;  
    //     this.isLoading = false;
    //     console.log(this.statistics)
    //   });
  }

}
