import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './_components/form-group/form-group.component';
import { FormControlComponent } from './_components/form-control/form-control.component';
import { FormArrayComponent } from './_components/form-array/form-array.component';
import { UsersComponent } from './_components/users/users.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    FormControlComponent,
    FormArrayComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
