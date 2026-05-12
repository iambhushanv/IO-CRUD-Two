import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
  stdArr: Array<Istd> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      email: 'jhon@gmail.com',
      contact: 1234567890,
      stdId: '123',
      isActive: true
    },
    {
      fname: 'Michael',
      lname: 'Johnson',
      email: 'michael@gmail.com',
      contact: 9876543210,
      stdId: '124',
      isActive: false
    },
    {
      fname: 'Emily',
      lname: 'Davis',
      email: 'emily@gmail.com',
      contact: 9123456780,
      stdId: '125',
      isActive: true
    },
    {
      fname: 'Chris',
      lname: 'Wilson',
      email: 'chris@gmail.com',
      contact: 8765432190,
      stdId: '126',
      isActive: false
    }
  ]

  getEditStd !: Istd

  constructor(
    private _SnackBarService: SnackBarService
  ) { }
  ngOnInit(): void {
  }

  getNewStd(newStd: Istd) {
    this.stdArr.push(newStd)
    this._SnackBarService.openSnackBar(`The New Student ${newStd.fname} added Successfully !!!`)
  }

  getRemoveId(id: string) {
    let getIndex = this.stdArr.findIndex(s => s.stdId === id)
    this.stdArr.splice(getIndex, 1)
    this._SnackBarService.openSnackBar(`The Student with Id ${id} removed Successfully !!!`)
  }

  getEditObj(editOBj: Istd) {
    this.getEditStd = editOBj
  }

  getUpdateStd(UpdateObj: Istd) {
    let getIndex = this.stdArr.findIndex(s => s.stdId === UpdateObj.stdId)
    this.stdArr[getIndex] = UpdateObj
    this._SnackBarService.openSnackBar(`The Student with Id ${UpdateObj.stdId} updated Successfully !!!`)

  }



}
