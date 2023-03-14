import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ArrayStore from 'devextreme/data/array_store';
import { SharedService } from 'src/app/services/shared.service';
import { AddDataComponent } from '../add-data/add-data.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

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

  public selectState(e: any) {
    this.selectedState = e.data;
  }

  public getData() {
    this.store.load().then(
      (data) => {this.storeData = data}
    )
    console.log(this.storeData)
  }

  public deleteData() {
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

  public openModal() {
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
