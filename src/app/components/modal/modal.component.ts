import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  state: string = '';
  capital: string = '';


  searchModeOption = 'contains';

  searchExprOption: any = 'Capital';

  searchTimeoutOption = 200;

  minSearchLengthOption = 0;

  showDataBeforeSearchOption = false;

  products: any = [{
    ID: 1,
    State: 'Alabama',
    Capital: "Montgomery",
  }, {
    ID: 2,
    State: 'Alaska',
    Capital: "Juneau",
  }, {
    ID: 3,
    State: 'Arizona',
    Capital: "Phoenix",
  }, {
    ID: 4,
    State: 'Florida',
    Capital: "Kentuki",
  }, {
    ID: 5,
    State: 'New York',
    Capital: "Washington",
  }
]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    public dialogConfirm: MatDialogRef<ConfirmationComponent>) { }

  public ngOnInit(): void {
     
    this.form = new FormGroup ( {
      state: new FormControl (this.data.state, [Validators.required]),
      capital: new FormControl (this.data.capital, [Validators.required]),
    })
  }

  public onSubmit() {
    const dialogConfirmRef = this.dialog.open(ConfirmationComponent, {
      data: 'Вы действительно хотите изменить этот элемент'
    })

    dialogConfirmRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.state = this.form.get('state')?.value
        this.data.capital = this.form.get('capital')?.value
      }
    })

    this.dialogRef.close()
  }

  public closeModal() {
    this.dialogRef.close()
  }

}
