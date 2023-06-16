import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonBallZService {

  public characters: Character[] = [{
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    }
  ];

  onNewCharacter(character: Character): void {
    const newChar: Character = { id: uuid(), ...character}
    this.characters.push(newChar);
  }

  deleteCharacterById(index:string): void {
    this.characters = this.characters.filter(character => character.id !== index);
  }
}
