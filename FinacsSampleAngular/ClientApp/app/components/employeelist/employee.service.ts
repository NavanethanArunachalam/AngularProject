import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

    
    private apiurl = 'http://localhost:50209/api/EmployeeDetails';
    
    public data: any = {};
    //public empdata: IEmployee[];
    private http1: Http | undefined;

    constructor(private http: Http) {
        
        console.log("constructor 1");
        this.getData();
        console.log("constructor 2");
        //this.getEmployee();
    }
    getData() {
        console.log('getData');
        return this.http.get(this.apiurl).map((res: Response) => res.json())
    }
    getEmployee(): IEmployee[] {
        this.getData().subscribe(data => {
            debugger
            console.log('getEmployee');
            console.log(data);
            this.data = data;
            
        })
        return this.data;
    }

    
    //constructor(private httpClient: Http) { }

    //getEmployeenew(): Observable <IEmployee[]> {
    //    //return Emp
    //    debugger

    
    //    // tell Angular you are expecting an array of 'Car'
    //    return this.httpClient.get<IEmployee[]>(this.apiurl)
    //}

    getEmployeeold(): IEmployee[] {
        return [
        {
        "EmployeeId": 1,
        "FirstName": "Daniel",
        "LastName": "Gilmore",
        "Email": "Daniel@gmail.com",
        "Age": 30,
        "Password": "OH"
        },
        {
        "EmployeeId": 2,
        "FirstName": "Patrick",
        "LastName": "Gilbert",
        "Email": "Patrick@gmail.com",
        "Age": 35,
        "Password": "OH"
        },
        {
        "EmployeeId": 3,
        "FirstName": "Salvatore",
        "LastName": "Gilene",
        "Email": "Salvatore@gmail.com",
        "Age": 37,
        "Password": "OH"
        },

        {

        "EmployeeId": 4,
        "FirstName": "Jan",
        "LastName": "Gilkey",
        "Email": "Jan@gmail.com",
        "Age": 40,
        "Password": "OH"
        },
        {
        "EmployeeId": 5,
        "FirstName": "Robert",
        "LastName": "Ginnan",
        "Email": "Robert@gmail.com",
        "Age": 45,
        "Password": "OH"
        },
        {
        "EmployeeId": 6,
        "FirstName": "Gregory",
        "LastName": "Glackin",
        "Email": "Gregory@gmail.com",
        "Age": 47,
        "Password": "OH"
        },

        {

        "EmployeeId": 7,
        "FirstName": "Myron",
        "LastName": "Gleberman",
        "Email": "Myron@gmail.com",
        "Age": 40,
        "Password": "OH"
        },
        {
        "EmployeeId": 8,
        "FirstName": "Rob",
        "LastName": "Glover",
        "Email": "Rob@gmail.com",
        "Age": 45,
        "Password": "OH"
        },
        {
        "EmployeeId": 9,
        "FirstName": "Rob",
        "LastName": "Ashley",
        "Email": "Ashley@gmail.com",
        "Age": 45,
        "Password": "OH"
        },
        {
        "EmployeeId": 10,
        "FirstName": "Golias",
        "LastName": "Paul",
        "Email": "Golias@gmail.com",
        "Age": 55,
        "Password": "OH"
        }
        ];
    }
}

//export empdata[] : IEmployee[] = [{
//    "EmployeeId": 1,
//    "FirstName": "Daniel",
//    "LastName": "Gilmore",
//    "Email": "Daniel@gmail.com",
//    "Age": 30,
//    "Password": "OH"
//}
//];
