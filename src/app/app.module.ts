import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    HttpClientModule
  ],
  providers: [
    VoteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
