import { Component, OnInit } from '@angular/core';
import { Documents } from 'src/app/interfaces/main.interface';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  
  public item!: Documents;
  public showSubmenuModes: any;
  public showFirstSubmenuModes: any;

  public documents: Documents [] = [{
      id: 1,
      name: 'Документы',
      items: [
        {
          id: 1,
          name: 'Накладная на получение товара'
        },{
          id: 2,
          name: 'Отпуск товара на сторону'
        }, {
          id: 3,
          name: 'Отпуск товара на сторону'
        },
      ]
    }
  ] 

  public catalogs: Documents [] = [{
    id: 1,
    name: 'Справочники',
    items: [
      {
        id: 1,
        name: 'Справочник товаров'
      },{
        id: 2,
        name: 'Справочник единиц измерения'
      }
    ]
  }]

  constructor( ) {
    this.showSubmenuModes = [{
      name: 'onHover',
      delay: { show: 0, hide: 500 },
    }, {
      name: 'onClick',
      delay: { show: 0, hide: 300 },
    }];
    this.showFirstSubmenuModes = this.showSubmenuModes[1];
  }

  public itemClick(item: any) {
    this.item = item
  }

}
