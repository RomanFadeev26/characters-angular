import { Component, OnInit } from '@angular/core';
import {CharactersService} from '../../services/characters/characters.service';
import {Character} from '../../entities/character.entity';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.css']
})
export class ListOfCharactersComponent implements OnInit {
  isLoading: boolean = false;
  characters: Character[] = [];
  isEmptyList: boolean = true;

  constructor(
    private charactersService: CharactersService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.charactersService.getListOfAllCharacters()
      .subscribe(characters => {
        this.characters = characters;
        this.isEmptyList = false;
        this.isLoading = false;
      });
  }

}
