import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit {
  balance: any;
  percentage: number;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('https://1.api.fy23ey06.careers.ifelsecloud.com/')
      .subscribe((data) => {
        this.balance = data.balance;
        this.percentage = this.balance.payment_done_percentage;
        console.log(this.percentage)
      });
  }

}
