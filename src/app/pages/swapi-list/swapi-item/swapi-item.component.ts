import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swapi-item',
  templateUrl: './swapi-item.component.html',
  styleUrls: ['./swapi-item.component.scss']
})
export class SwapiItemComponent implements OnInit {
  @Input() character: [];
  constructor() {}

  ngOnInit() {
    console.log('charactersWithBirthYear', this.character);
  }
}
