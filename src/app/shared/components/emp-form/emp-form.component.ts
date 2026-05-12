import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IEmployee } from '../../models/emp';
import { empty, last } from 'rxjs';
import { UuidService } from '../../services/std.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit, OnChanges {

  constructor(
    private _UuidService: UuidService
  ) { }
  ngOnInit(): void {
  }
  @ViewChild('fname') fname !: ElementRef
  @ViewChild('lname') lname !: ElementRef
  @ViewChild('Department') Department !: ElementRef
  @ViewChild('Sallery') Sallery !: ElementRef
  @ViewChild('isActive') isActive !: ElementRef

  ngOnChanges(changes: SimpleChanges): void {
    let val = changes['geteditObj'].currentValue
    if (val) {
      this.isInEditMode = true
      this.fname.nativeElement.value = this.geteditObj.fname
      this.lname.nativeElement.value = this.geteditObj.lname
      this.Department.nativeElement.value = this.geteditObj.department
      this.Sallery.nativeElement.value = this.geteditObj.salary
      this.isActive.nativeElement.value = this.geteditObj.isActive
    }
  }


  isInEditMode: boolean = false
  @Output() emitEmp: EventEmitter<IEmployee> = new EventEmitter<IEmployee>()
  @Output() emitUpdateemp: EventEmitter<IEmployee> = new EventEmitter<IEmployee>()

  @Input() geteditObj !: IEmployee

  onAdd() {
    let fnameVal = this.fname.nativeElement.value;
    let lnameVal = this.lname.nativeElement.value;
    let DepartmentVal = this.Department.nativeElement.value;
    let SalleryVal = this.Sallery.nativeElement.value;
    let isActiveVal = this.isActive.nativeElement.value;

    if (fnameVal.length > 0 && lnameVal.length > 0 && DepartmentVal.length > 0 && SalleryVal.length > 0) {
      let newEmp: IEmployee = {
        fname: fnameVal,
        lname: lnameVal,
        department: DepartmentVal,
        salary: SalleryVal,
        isActive: isActiveVal,
        empId: this._UuidService.uuid()
      }
      this.emitEmp.emit(newEmp)

      this.fname.nativeElement.value = ''
      this.lname.nativeElement.value = ''
      this.Department.nativeElement.value = ''
      this.Sallery.nativeElement.value = ''
      this.isActive.nativeElement.value = ''

    }

  }

  onUpdate() {
    let UpdatedObj: IEmployee = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      department: this.Department.nativeElement.value,
      salary: this.Sallery.nativeElement.value,
      isActive: this.fname.nativeElement.value,
      empId: this.geteditObj.empId
    }
    this.emitUpdateemp.emit(UpdatedObj)
    
      this.fname.nativeElement.value = ''
      this.lname.nativeElement.value = ''
      this.Department.nativeElement.value = ''
      this.Sallery.nativeElement.value = ''
      this.isActive.nativeElement.value = ''
      this.isInEditMode = false
  }

}
