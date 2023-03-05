import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: ' ', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
