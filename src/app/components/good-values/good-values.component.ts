import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-good-values',
  templateUrl: './good-values.component.html',
  styleUrls: ['./good-values.component.scss']
})
export class GoodValuesComponent implements OnInit {

  public data: any = [];
  public currentUser!: string;

  selectedData!: any;
  store: ArrayStore;


  constructor(private httpService: HttpService) { 
    this.store = new ArrayStore({
      key: "id",
      data: this.data.data,
    });
  }

  ngOnInit(): void {
    this.httpService.getData().subscribe(data => {
      this.data = data
      console.log(this.data)
    })
  }

  public selectState(e: any) {
    this.selectedData = e.data;
  }

}
