import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/main.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form!: FormGroup;
  login: string = '';
  password: string = '';
  user!: User;

  constructor( private auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.form = new FormGroup ( {
      login: new FormControl (null, [Validators.required]),
      password: new FormControl (null, [Validators.required, Validators.minLength(3)])
    })
  }

  public onSubmit() {
    this.user = {
      username: this.form.get('login')?.value,
      password: this.form.get('password')?.value
    }


    this.auth.login(this.user).subscribe((res: boolean) => {
      if (res) {
        this.router.navigate(['/', 'main-menu'])
      } else {
        console.log('No right credentials')
      }
    })
  }


  public goValues() {

    this.user = {
      username: this.form.get('login')?.value,
      password: this.form.get('password')?.value
    }


    this.auth.login(this.user).subscribe((res: boolean) => {
      if (res) {
        this.router.navigate(['/', 'good-values'])
      } else {
        console.log('No right credentials')
      }
    })
  }

  public goTabpanel() {
    this.router.navigate(['/', 'tab-panel'])
  }
  
  public logout(): void {
    localStorage.clear()
  }

}
