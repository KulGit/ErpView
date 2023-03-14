import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import ArrayStore from "devextreme/data/array_store";
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { SharedService } from './services/shared.service';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 

}