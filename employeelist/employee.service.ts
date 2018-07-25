import { Injectable } from '@angular/core';
import { IEmployee } from './employee'

@Injectable()
export class EmployeeService {
    getemployee(): IEmployee[] {

        return [
                {
                    employeeId: 1,
                    employeeName: 'Navanethan',
                    employeeLastName: 'MA',
                    email: 'navanethan@gmail.com',
                    age": 10,
                    stateCode: 'TN',
                    countryCode: 'IND'
                }
            ];
        
    }
    //getemployee(): IEmployee[] {
    //    return [
    //        {

    //            "employeeId": 1,
    //            "employeeName": "Navanethan",
    //            "employeeLastName": "MA",
    //            "email": "navanethan@gmail.com",
    //            "age": 10,
    //            "stateCode": "TN",
    //            "countryCode": "IND"
    //        },
    //        {
    //            "employeeId": 2,
    //            "employeeName": "Balu",
    //            "employeeLastName": "A",
    //            "email": "balu@gmail.com",
    //            "age": 15,
    //            "stateCode": "TN",
    //            "countryCode": "IND"
    //        },
    //        {
    //            "employeeId": 3,
    //            "employeeName": "Giridharan",
    //            "employeeLastName": "MA",
    //            "email": "giridharan@gmail.com",
    //            "age": 7,
    //            "stateCode": "TN",
    //            "countryCode": "IND"
    //        }
    //    ];
    //}
}