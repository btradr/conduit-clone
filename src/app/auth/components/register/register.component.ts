import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  public constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    console.log(this.registerForm.value);
  }

  private initializeForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
