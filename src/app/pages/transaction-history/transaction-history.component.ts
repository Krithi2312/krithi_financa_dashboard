import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  transactions: any;
  displayedColumns: string[] = ['date', 'name', 'status', 'type', 'time', 'amount', 'actions'];
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private httpClient: HttpClient,
    public _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('https://1.api.fy23ey06.careers.ifelsecloud.com/')
      .subscribe((data) => {
        this.transactions = data.transactions;
        this.dataSource = new MatTableDataSource<any>(this.transactions);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(data: any): void {
    const dialogRef = this._matDialog.open(TransactionDetailComponent, {
      data: {data: data},
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
