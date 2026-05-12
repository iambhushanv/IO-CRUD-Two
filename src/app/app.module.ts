import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { MaterialService } from './shared/material/material.module';
import { GetConfirmComponent } from './shared/components/post-card/get-confirm/get-confirm.component';
import { StdDashboardComponent } from './shared/components/std-dashboard/std-dashboard.component';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { EmpDashboardComponent } from './shared/components/emp-dashboard/emp-dashboard.component';
import { EmpTableComponent } from './shared/components/emp-table/emp-table.component';
import { EmpFormComponent } from './shared/components/emp-form/emp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent,
    GetConfirmComponent,
    StdDashboardComponent,
    StdFormComponent,
    StdTableComponent,
    EmpDashboardComponent,
    EmpTableComponent,
    EmpFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
