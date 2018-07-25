import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
    selector: 'fetchdataemp',
    templateUrl: './fetchemployeedata.component.html'
})
export class FetchEmployeeDataComponent {
    //public employeeJSON: IEmployeeJSON[];

    ////constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    ////    http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
    ////        this.employeeJSON = result.json() as IEmployeeJSON[];
    ////    }, error => console.error(error));
    ////}

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'http://localhost:50209/api/EmployeeDetails').subscribe(result => {
    //        this.employeeJSON = result.json() as IEmployeeJSON[];
    //    }, error => console.error(error));
    //}
    private apiurl = 'http://localhost:50209/api/EmployeeDetails';
    data: any = {};

    constructor(private http: Http) {
        console.log("Hellow fellow user");
        this.getEmployees();
        //this.getData();
    }
    getData() {
        return this.http.get(this.apiurl).map((res: Response) => res.json())
    }
    getEmployees() {
        this.getData().subscribe(data => {
            console.log(data);
            this.data = data

        })
    }
}



