import { Injectable } from "@angular/core";




@Injectable({
    providedIn: 'root'
})
export class UuidService {
    uuid(){
        return Date.now().toString()
    }
}