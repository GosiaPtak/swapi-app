import { Component, OnInit } from '@angular/core';
import { SwapiListService } from './swapi-list.service';
import { Character } from '../models/character.model';
@Component({
  selector: 'app-swapi-list',
  templateUrl: './swapi-list.component.html',
  styleUrls: ['./swapi-list.component.scss'],
  providers: [SwapiListService]
})
export class SwapiListComponent implements OnInit {
  public character: Character[];
  public listOfCharacters: { map?: any };
  constructor(private swapiListService: SwapiListService) {}

  ngOnInit() {
    this.getListOfCharacters();
  }
  getListOfCharacters(): void {
    this.swapiListService.getPeople().subscribe(val => {
      this.listOfCharacters = val;
      this.listOfCharacters = this.listOfCharacters.map((lop: { results: [] }) => lop.results).flat(2);
      return this.getCharacter(this.listOfCharacters);
    });
  }
  getCharacter(listOfCharacters) {
    this.character = listOfCharacters.map(character => ({
      name: character.name,
      height: character.height,
      mass: character.mass,
      birth_year: character.birth_year,
      BMI: character.mass / Math.pow(character.height / 100, 2)
    }));
    console.log(this.character);
    return this.character;
  }
}
