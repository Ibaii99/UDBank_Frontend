import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(fb: FormBuilder) {

    this.formGroup = fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      address: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      postal_code: new FormControl(''),
      about: new FormControl('')
  });

  }



  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.formGroup);
  }
}
