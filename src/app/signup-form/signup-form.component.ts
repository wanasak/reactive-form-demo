import { EmailValidators } from './../common/email.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        EmailValidators.cannotContainSpace
      ], EmailValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  get email() {
    return this.form.get('account.email');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
