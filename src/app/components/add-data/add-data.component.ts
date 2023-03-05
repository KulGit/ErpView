import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDataComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  state: string = '';
  capital: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddDataComponent>,
    public sharedService: SharedService
    ) { }

  public ngOnInit(): void {
     
    this.form = new FormGroup ( {
      id: new FormControl (null, [Validators.required]),
      state: new FormControl (null, [Validators.required]),
      capital: new FormControl (null, [Validators.required]),
    })
  }

  public addNewData() {
    this.id = this.form.get('id')?.value
    this.state = this.form.get('state')?.value
    this.capital = this.form.get('capital')?.value
    this.data = [...this.data, {id: this.id, state: this.state, capital: this.capital }]

    this.sharedService.updateDate(this.data)
    this.dialogRef.close()
  }

  public close() {
    this.dialogRef.close()
  }

}
