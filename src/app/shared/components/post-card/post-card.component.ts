import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../models/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() getPostArr !: Array<Ipost>
  @Output() emitRemoveId : EventEmitter<string> = new EventEmitter<string>()
    @Output() emitEditPost : EventEmitter<Ipost> = new EventEmitter<Ipost>()


  constructor(
    private _matDialog : MatDialog
  ) { }
  ngOnInit(): void {
  }

  trackByFun(index: number, post: Ipost){
    return post.id
  }

  onRemove(id: string){
    console.log(id);

    let config = new MatDialogConfig
    config.width = '350px'
    config.disableClose = true

    let matDilogR = this._matDialog.open(GetConfirmComponent,config)
    matDilogR.afterClosed().subscribe(isdelete => {
      if(isdelete === true){
        this.emitRemoveId.emit(id)
      }
    })
  }

  onEdit(editPost: Ipost){
    this.emitEditPost.emit(editPost)
  }

}
