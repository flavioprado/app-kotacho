import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("name") nameField: ElementRef;

  ngAfterViewInit() {
    // this.nameField.nativeElement.focus();
    setTimeout(() => {
      if (this.nameField.nativeElement) {
        this.nameField.nativeElement.focus();
      }
    })
  }


  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.loginForm.controls; }



  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else if (this.data.username.value == localStorage.getItem("username") && this.data.password.value == localStorage.getItem("password")) {
      this.router.navigate(['/home']);
    } else {
      this.submitted = true;
    }
  }

  login() {
    this.submitted = true;
    const { value, valid } = this.loginForm;
    if (valid) {
      this.authService.login(value.username, value.password).subscribe(
        data => {
          const url = "/home";
          this.router.navigate([url]);
        },
        error => {
          this.nameField.nativeElement.focus();
          return;
          //this.error = true;
        }
      );
    }
  }
}
