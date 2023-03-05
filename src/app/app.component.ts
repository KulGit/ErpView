import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import ArrayStore from "devextreme/data/array_store";
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { SharedService } from './shared.service';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedState!: any;

  store: ArrayStore;

  storeData!: Array<any>;

  popUp: boolean = false;

  changeStatus!: string;

  public ngOnInit(): void {
     this.sharedService.updatedDate$.subscribe(data => this.storeData = data)
  }

  states = [
      { id: 1, state: "Alabama", capital: "Montgomery" },
      { id: 2, state: "Alaska", capital: "Juneau" },
      { id: 3, state: "Arizona", capital: "Phoenix" },
      { id: 4, state: "Florida", capital: "Kentuki" },
      { id: 5, state: "New York", capital: "Washington" },
  ];

 
  constructor( private dialog: MatDialog, private cd: ChangeDetectorRef, public sharedService: SharedService ) {
    this.selectState = this.selectState.bind(this);
    this.store = new ArrayStore({
      key: "id",
      data: this.states,
    });
  }

  selectState(e: any) {
    this.selectedState = e.data;
  }

  getData() {
    this.store.load().then(
      (data) => {this.storeData = data}
    )
  }

  deleteData() {
      const dialogRef = this.dialog.open(ConfirmationComponent, { 
      data: 'Вы действительно хотител удалить этот элемент'
    })

    dialogRef.afterClosed().subscribe (result => {
      if (result) {
        console.log(result)
        const idToRemove = this.selectedState.id;
        const index = this.storeData.findIndex(obj => obj.id === idToRemove);
        if (index !== -1) {
          this.storeData.splice(index, 1);
        }
      }
    })
  }

  openModal() {
    this.dialog.open(ModalComponent, {
      data:  this.selectedState 
    });
  }

  public changeData() {
    const dialogRef = this.dialog.open(AddDataComponent, {
      data:  this.storeData 
    });
  }

  public togglePopUp(): void {
    this.popUp = !this.popUp
    console.log(this.popUp)
  }

}