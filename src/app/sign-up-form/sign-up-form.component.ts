import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  PasswordComplexityValidator,
  PasswordMatchValidator,
} from '../utils/custom-form.validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent implements OnInit {
  form!: FormGroup; // the ! tells TS that value will be assigned at runtime.

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  handleSubmit() {
    console.log(this.form);
  }

  createForm() {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.required, PasswordComplexityValidator]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [PasswordMatchValidator('password', 'confirmPassword')],
      }
    );
  }
}
