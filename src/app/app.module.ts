import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CakeFormComponent } from './cake-form/cake-form.component';
import { VoteServiceService } from './vote-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CakeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    VoteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
