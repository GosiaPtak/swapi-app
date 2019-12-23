import { Component, OnInit, Output } from '@angular/core';
import { SwapiListService } from './swapi-list.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-swapi-list',
  templateUrl: './swapi-list.component.html',
  styleUrls: ['./swapi-list.component.scss'],
  providers: [SwapiListService]
})
export class SwapiListComponent implements OnInit {
  public characters: Character[];
  public listOfCharacters: { map?: any };
  @Output() public charactersWithBirthYear: Character[];
  @Output() public charactersWithUnknownBirthYear: Character[];
  public columns = { start: 0, end: 120, step: 20 };
  public arrayOfColumns = [];
  public column: any;
  constructor(private swapiListService: SwapiListService) {}

  ngOnInit() {
    this.getListOfCharacters();
  }
  getListOfCharacters(): void {
    this.swapiListService.getPeople().subscribe(val => {
      const charactersOfSwapi: { map?: any } = val;
      this.listOfCharacters = charactersOfSwapi.map((loc: { results: [] }) => loc.results).flat(2);
      this.getColumns();
      return this.mapCharacters(this.listOfCharacters);
    });
  }

  mapCharacters(listOfCharacters) {
    const SwapiCharacters = listOfCharacters.map(character => ({
      name: character.name,
      height: character.height,
      mass: character.mass,
      birth_year: character.birth_year !== 'unknown' ? Number(character.birth_year.slice(0, -3)) : character.birth_year,
      BMI: character.mass / Math.pow(character.height / 100, 2)
    }));
    this.filterByYear(SwapiCharacters);
  }
  filterByYear(characters) {
    this.charactersWithBirthYear = characters.filter(character => character.birth_year !== 'unknown').sort((a, b) => a.birth_year - b.birth_year);
    this.charactersWithUnknownBirthYear = characters.filter(character => character.birth_year === 'unknown');
  }
  getColumns() {
    this.arrayOfColumns = Array.from(Array.from(Array(Math.ceil((this.columns.end - this.columns.start) / this.columns.step)).keys()), x => this.columns.start + x * this.columns.step);
    console.log(this.arrayOfColumns);
    return this.arrayOfColumns;
  }
}
