import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'my-app',
  templateUrl: './lib.component.html',
  styleUrls: ['./app.component.css']
})
export class LibComponent  implements OnInit {

    ngOnInit(){

    }

    eventFromChild($evnt){
      console.log("event call",$evnt);
    }
}
