import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/main.interface';
import { AuthService } from 'src/app/auth.service';

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

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {


    this.form = new FormGroup ( {
      login: new FormControl (null, [Validators.required]),
      password: new FormControl (null, [Validators.required, Validators.minLength(3)])
    })
  }

  public onSubmit() {
    console.log(this.form.get('login')?.value)

    this.user = {
      username: this.form.get('login')?.value,
      password: this.form.get('password')?.value
    }

    this.auth.login(this.user).subscribe( (res: any) => { 
      localStorage.setItem('token2', res.token.toString()),
      (error: any) => console.log(error)
    })

      this.router.navigate(['/', 'main'])


  }

  public logout(): void {
    localStorage.clear()
  }

}
