import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
@Component({
    selector: 'list-employees',
    templateUrl: './employee-list.component.html',

})
export class EmployeeListComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        this.employees = this._employeeService.getemployee();
        this.filteredemployee = this.employees;
    }
    projectTitle: string = "My First Angular Project";
    tableTitle: string = "List of employees";
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;

    employees: IEmployee[];
    filteredemployee: IEmployee[];
    _filtertext: string;
    
    toggleImage(): void { this.showImage = !this.showImage; };

    constructor(private _employeeService: EmployeeService) { }
    get filterText(): string {
        return this._filtertext;
    }
    set filterText(value: string) {
        this._filtertext = value;
        this.filteredemployee = this.filterText ? this.performFilter(this.filterText) : this.employees;
    }
    performFilter(filterBy: string): IEmployee[] {
        filterBy = this.filterText.toLocaleLowerCase();
        console.log(this.employees.filter((employee: IEmployee) => employee.employeeName.toLocaleLowerCase().indexOf(filterBy) !== -1));
        return this.employees.filter((employee: IEmployee) => employee.employeeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}