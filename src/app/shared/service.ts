import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class sharedService{

    public storage = new Subject<any>();
    
    constructor(private router: RouterExtensions) {}

    ngOnInit() {
    }
    
    logout() {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
        alert('logout');
    }

    UserData(data) {
        this.storage.next(data);
    }

    getData(): Observable<any> {
        return this.storage.asObservable();
    }

}