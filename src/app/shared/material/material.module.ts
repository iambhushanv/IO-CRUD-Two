import { Injectable, NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';


let matArr = [MatButtonModule, MatCardModule, MatIconModule, MatSnackBarModule, MatDialogModule]


@NgModule({
    imports: [...matArr],
    exports: [...matArr]
})
export class MaterialService {

}
