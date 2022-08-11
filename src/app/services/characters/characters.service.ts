import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Character} from '../../entities/character.entity';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url: string = 'api/characters';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  getListOfAllCharacters() {
    return this.http.get<Character[]>(this.url, this.httpOptions);
  }
}
