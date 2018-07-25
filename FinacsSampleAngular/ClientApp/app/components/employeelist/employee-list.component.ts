import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService} from './employee.service';
@Component({
    selector: 'list-employees',
    templateUrl: './employee-list.component.html',

})
export class EmployeeListComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        debugger;
        this.employees = this._employeeService.getEmployee();
        console.log('this.employees');
        console.log(this.employees);
        this.filteredemployee = this.employees;
        //this.employees = data; 
        //console.log('this.employees after asigning data');
        //console.log(this.employees);
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

    constructor(private _employeeService: EmployeeService) { console.log('_employeeService constructor'); }
    get filterText(): string {
        return this._filtertext;
    }
    set filterText(value: string) {
        this._filtertext = value;
        this.filteredemployee = this.filterText ? this.performFilter(this.filterText) : this.employees;
    }
    performFilter(filterBy: string): IEmployee[] {
        filterBy = this.filterText.toLocaleLowerCase();
        console.log(this.employees.filter((employee: IEmployee) => employee.FirstName.toLocaleLowerCase().indexOf(filterBy) !== -1));
        return this.employees.filter((employee: IEmployee) => employee.FirstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}