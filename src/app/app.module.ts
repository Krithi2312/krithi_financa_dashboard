import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';
import { MoneyStatisticsComponent } from './pages/money-statistics/money-statistics.component';
import { TotalBalanceComponent } from './pages/total-balance/total-balance.component';
import { CardDetailComponent } from './pages/card-detail/card-detail.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { ContentComponent } from './navigation/content/content.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TransactionDetailComponent } from './pages/transaction-history/transaction-detail/transaction-detail.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    TransactionHistoryComponent,
    MoneyStatisticsComponent,
    TotalBalanceComponent,
    CardDetailComponent,
    ContentComponent,
    OverviewComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDialogModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TransactionDetailComponent]
})
export class AppModule { }
