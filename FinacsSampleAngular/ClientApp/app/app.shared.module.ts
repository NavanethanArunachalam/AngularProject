import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { NbbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { TaxMasterComponent } from './components/taxmaster/taxmaster.component';
import { EmployeeListComponent } from './components/employeelist/employee-list.component';
import { EmployeeService } from './components/employeelist/employee.service';
import { FetchEmployeeDataComponent } from './components/fetchemployeedata/fetchemployeedata.component';


////code --main
//import { enableProdMode } from '@angular/core';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { environment } from './components/environments/environment';

//if (environment.production) {
//    enableProdMode();
//}

//platformBrowserDynamic().bootstrapModule(AppComponent);

////code --main


////code-- app.module

//import { ReactiveFormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';

////import { HeroFormTemplateComponent } from './template/hero-form-template.component';
////import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
////import { ForbiddenValidatorDirective } from './components/shared/forbidden-name.directive';
////import { IdentityRevealedValidatorDirective } from './components/shared/identity-revealed.directive';

//@NgModule({
//    imports: [
//        BrowserModule,
//        FormsModule,
//        ReactiveFormsModule
//    ],
//    declarations: [
//        AppComponent,
//        //HeroFormTemplateComponent,
//        //HeroFormReactiveComponent,
//        //ForbiddenValidatorDirective,
//        //IdentityRevealedValidatorDirective
//    ],
//    bootstrap: [AppComponent]
//})
//export class AppModule { }

////code--app.module

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        TaxMasterComponent,
        EmployeeListComponent,
        FetchEmployeeDataComponent
    ],
    providers: [
        EmployeeService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'taxmaster', component: TaxMasterComponent },
            { path: 'employeelist', component: EmployeeListComponent },
            { path: 'employeejson', component: FetchEmployeeDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
