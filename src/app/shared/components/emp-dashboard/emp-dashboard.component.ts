import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/emp';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {
  empArr: Array<IEmployee> = [
    {
      empId: '101',
      fname: 'James',
      lname: 'Anderson',
      department: 'Engineering',
      salary: 75000,
      isActive: false
    },
    {
      empId: '102',
      fname: 'Sarah',
      lname: 'Mitchell',
      department: 'Marketing',
      salary: 55000,
      isActive: true
    },
    {
      empId: '103',
      fname: 'Robert',
      lname: 'Carter',
      department: 'Finance',
      salary: 65000,
      isActive: false
    },
    {
      empId: '104',
      fname: 'Jessica',
      lname: 'Turner',
      department: 'Human Resources',
      salary: 50000,
      isActive: true
    }
  ];

  editObj !: IEmployee

  constructor(
    private _SnackBarService: SnackBarService
  ) { }
  ngOnInit(): void {
  }

  getnewEmp(emp: IEmployee) {
    this.empArr.push(emp)
    this._SnackBarService.openSnackBar(`The new employee ${emp.fname} added successfully!!! `)
  }

  getRemoveId(id: string) {
    let getIndex = this.empArr.findIndex(e => e.empId === id)
    this.empArr.splice(getIndex, 1)
    this._SnackBarService.openSnackBar(`The employee with Id ${id} removed successfully!!! `)
  }

  getEditObj(Obj: IEmployee) {
    this.editObj = Obj
  }

  getEmitObj(emitOBj: IEmployee) {
    let getIndex = this.empArr.findIndex(e => e.empId === emitOBj.empId)
    console.log(getIndex);
    
    this.empArr[getIndex] = emitOBj
    this._SnackBarService.openSnackBar(`The employee with Id ${emitOBj.empId} updated successfully!!! `)

  }

}
