import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodValuesComponent } from './components/good-values/good-values.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TabpanelComponent } from './components/tabpanel/tabpanel.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { MarketComponent } from './pages/market/market.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'good-values', component: GoodValuesComponent },
  { path: 'tab-panel', component: TabpanelComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'market', component: MarketComponent },
  { path: 'market/good-values', component: GoodValuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
