
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'taxmaster',
    templateUrl: './taxmaster.component.html',
    styleUrls: ['./taxmaster.component.css']
})
export class TaxMasterComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    powers = ['SGST', 'CGST'];
    onSave(): void {
        alert("Save succesfully");
    }
}

