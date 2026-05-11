import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {

  isInEditMode: boolean = false

  @ViewChild('title') title !: ElementRef;
  @ViewChild('content') content !: ElementRef
  @ViewChild('userId') userId !: ElementRef

  @Output() emitNewPost: EventEmitter<Ipost> = new EventEmitter<Ipost>()
    @Output() emitUpdatePost: EventEmitter<Ipost> = new EventEmitter<Ipost>()

  @Input() geteditObj !: Ipost

  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['geteditObj'].currentValue) {
      this.isInEditMode = true
      this.title.nativeElement.value = this.geteditObj.title
      this.content.nativeElement.value = this.geteditObj.content
      this.userId.nativeElement.value = this.geteditObj.id
    }
  }

  onPostAdd() {

    let titleVal = this.title.nativeElement.value;
    let contentVal = this.content.nativeElement.value;
    let userIdVal = this.userId.nativeElement.value;

    if (titleVal.length > 0 && contentVal.length > 0) {
      let newPost: Ipost = {
        title: titleVal,
        content: contentVal,
        id: userIdVal
      }
      console.log(newPost);
      this.emitNewPost.emit(newPost)

      this.title.nativeElement.value = ''
      this.content.nativeElement.value = ''

    }
  }

  onUpdate() {
    let UpdatePost: Ipost = {
      title: this.title.nativeElement.value,
      content: this.content.nativeElement.value,
      id: this.geteditObj.id
    }
    this.emitUpdatePost.emit(UpdatePost)
    this.title.nativeElement.value = ''
    this.content.nativeElement.value = ''
    this.isInEditMode = false

  }
}

