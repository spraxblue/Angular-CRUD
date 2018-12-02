import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { CreateComponent } from './Employee/create.component';
import { ViewComponent } from './Employee/view.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { SwapService } from './shared/swap.service';

const appRoutes: Routes = [
  {
    path: 'view',
    component: ViewComponent
},
{
  path: 'create',
  component: CreateComponent
},
{
  path: 'signup',
  component: SignupComponent
},
// {   path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   },

];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    HighlighterDirective,
    MyNgIfDirective,
    SignupComponent,
    OneComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     BsDatepickerModule.forRoot(),
    // RouterModule.forRoot(appRoutes, { useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ SwapService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
