import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    city: new FormControl('',Validators.required),
    district: new FormControl('',Validators.required),
    zip: new FormControl('',Validators.required)

  })
  constructor(){}
  
  
    
  ngOnInit(){
  }
  onSubmit(){
    alert(JSON.stringify(this.form.value))
  }
}
