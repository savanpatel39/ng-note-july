import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginSignupForm: FormGroup;
  pwd = '';

  constructor() { }

  ngOnInit(): void {
    this.loginSignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      cnfrmPassword: new FormControl(null, [Validators.required, this.matchPassword.bind(this)] )
    });
  }

  matchPassword(control: FormControl): {[s: string]: boolean} {
    if ( this.pwd && control.value !== this.pwd) {
      console.log('password does not match');
      return { nomatch : true };
    }
    return { nomatch : false };
  }
// ADDING THIS TO TEST GITHUB COMMIT
  onSubmit() {
    //
    const email = this.loginSignupForm.value.email;
    const password = this.loginSignupForm.value.password;
    console.log({email, password});
    this.loginSignupForm.reset();
  }

}
