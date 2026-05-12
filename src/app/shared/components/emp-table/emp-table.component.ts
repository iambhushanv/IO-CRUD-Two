import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../../models/emp';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../post-card/get-confirm/get-confirm.component';
import { config } from 'rxjs';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent implements OnInit {
  @Input() getEmpArr !: Array<IEmployee>
  @Output() emitRemoveId : EventEmitter<string> = new EventEmitter<string>()
  @Output() emiteditOBj : EventEmitter<IEmployee> = new EventEmitter<IEmployee>()

  constructor(
    private _matDialog : MatDialog
  ) { }
  ngOnInit(): void {
  }

  onRemove(id: string){
    console.log(id);

    let config = new MatDialogConfig
    config.width= '350px'
    config.disableClose = true
    config.data = `Are you sure, you want to remove employee with id ${id} ?`
    let matD = this._matDialog.open(GetConfirmComponent, config)
    matD.afterClosed().subscribe(isConfirm =>{
      if(isConfirm){
        this.emitRemoveId.emit(id)
      }
    })
    
  }

  onEdit(editObj: IEmployee){
    this.emiteditOBj.emit(editObj)
  }
  trackByFun(index: number, emp: IEmployee){
    return emp.empId
  }

}
