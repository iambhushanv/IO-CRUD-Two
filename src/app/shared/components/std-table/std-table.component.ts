import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/std';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../post-card/get-confirm/get-confirm.component';
import { config } from 'rxjs';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input() getStdsInfo !: Array<Istd>
  @Output() emitRemoveId : EventEmitter<string> = new EventEmitter<string>()
  @Output() emitStdObj : EventEmitter<Istd> = new EventEmitter<Istd>()

  constructor(
    private _matDiolog : MatDialog
  ) { }
  ngOnInit(): void {
  }

  trackByFun(index: number, std: Istd){
    return std.stdId
  }

  onRemove(id: string){
    console.log(id);

    let config = new MatDialogConfig
    config.width = '350px'
    config.disableClose = true
    config.data = `Are you sure, you want to delete student with id ${id} ?`

   let dialog =  this._matDiolog.open(GetConfirmComponent, config)
   dialog.afterClosed().subscribe(isConfirm =>{
    if(isConfirm){
     this.emitRemoveId.emit(id)
    }
   })
    
  }

  onStdEdit(editStd: Istd){
    console.log(editStd);
    this.emitStdObj.emit(editStd)
    
  }

}
