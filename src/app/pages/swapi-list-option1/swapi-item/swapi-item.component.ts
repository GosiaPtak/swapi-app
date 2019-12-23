import { Component, OnInit, Input } from '@angular/core';
import { Character } from './../../../shared/models/character.model';
@Component({
  selector: 'app-swapi-item',
  templateUrl: './swapi-item.component.html',
  styleUrls: ['./swapi-item.component.scss']
})
export class SwapiItemComponent implements OnInit {
  @Input() character: Character;
  @Input() option: number;
  constructor() {}

  ngOnInit() {}
}
