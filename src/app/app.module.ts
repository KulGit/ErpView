import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxListModule, DxMenuModule, DxPopupModule, DxSelectBoxModule, DxSortableModule, DxTabPanelModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule  } from '@angular/material/tabs';
import { AddDataComponent } from './components/add-data/add-data.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoodValuesComponent } from './components/good-values/good-values.component';
import { JwtinterceptorInterceptor } from './services/jwtinterceptor.interceptor';
import { TabpanelComponent } from './components/tabpanel/tabpanel.component';
import { Service } from './services/tab-data.service';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MarketComponent } from './pages/market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AddDataComponent,
    LoginFormComponent,
    ConfirmationComponent,
    MainPageComponent,
    GoodValuesComponent,
    TabpanelComponent,
    MainMenuComponent,
    MenuCardComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    DxPopupModule,
    FormsModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    HttpClientModule,
    DxSortableModule,
    DxTabPanelModule,
    DxListModule,
    DxTemplateModule,
    DxMenuModule,
    DxCheckBoxModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorInterceptor, multi: true },
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
