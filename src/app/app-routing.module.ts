import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodValuesComponent } from './components/good-values/good-values.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TabpanelComponent } from './components/tabpanel/tabpanel.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'main', component: MainPageComponent },
  {path: 'good-values', component: GoodValuesComponent},
  {path: 'tab-panel', component: TabpanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
