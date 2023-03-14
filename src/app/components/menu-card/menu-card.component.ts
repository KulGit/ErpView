import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  @Input() imgName: string = '';
  @Input() description: string = '';
  @Input() btnLink: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
