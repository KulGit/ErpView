import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public imgMarketCard: string = './../../../assets/card.jpg'
  public imgStoCard: string = './../../../assets/card.jpg'
  public imgAccountCard: string = './../../../assets/card.jpg'
  public imgPersonalCard: string = './../../../assets/card.jpg'

  public descriptionMarketCard: string = 'Управление розничной торговлей'
  public descriptionStoCard: string = 'Управление СТО'
  public descriptionAccountCard: string = 'Счета и Акты'
  public descriptionPersonalCard: string = 'Личный кабинет'

  public btnLinkMarketCard: string = '/market'

  constructor() { }

  ngOnInit(): void {
  }

}
