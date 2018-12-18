import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id,
})
export class SignupComponent implements OnInit {

  public input: any;
  drawer: RadSideDrawer;

  public constructor(private location: Location,private router: RouterExtensions) {
      this.input = {
          "fName": "",
          "email": "",
          "password": "",
          "phone": "",
      }
  }

    public register() {
        if(this.input.fName && this.input.email && this.input.password && this.input.phone) {
            ApplicationSettings.setString("account", JSON.stringify(this.input));
            alert('register successfully');
            this.location.back();
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

  ngOnInit(){

  }

  ngAfterViewInit() {
    setTimeout(() => {
        this.drawer = <RadSideDrawer>getRootView();
        this.drawer.gesturesEnabled = false;
    }, 100);
  }

}
